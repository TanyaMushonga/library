// Date Created: Nov 7 2023 01:00:00 AM
//this code was written by Tanyaradzwa T Mushonga and is owned by Tanyaradzwa T Mushonga

//all the necessary imports for the project

import React from "react";
import { useState } from "react";
import styles from "./../styles/mainStyles.module.css";
import InputBox from "../../registerComponents/inputbox";
import ComboBox from "./dropdown";
import ComboBoxDepartment from "./departmentDropdown";
import { app } from "./../../../../firebaseconfig";
import Image from 'next/image';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { set } from "firebase/database";
//imports ending here

//this is the main section of the page
const MainSection = () => {
  //this is the firebase configuration
  const db = getFirestore(app);
  const storage = getStorage(app);
  //firebase configuration ends here

  //all the states used in the project
  const [fileupload, setfileupload] = useState<FileList | null>(null);
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [examiner, setExaminer] = useState("");
  const [year, setYear] = useState("");
  const [faculty, setFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploadClicked, setIsUploadClicked] = useState(false);
  //all the states end here

  //this is the upload function that uploads the file to firebase storage and the data to firestore
  const upload = async () => {
    //this is the validation for the input fields
    if (courseName === "") {
      alert("Please enter the course name");
      setIsUploadClicked(false);
      return;
    } else if (courseCode === "") {
      alert("Please enter the course code");
      setIsUploadClicked(false);
      return;
    } else if (examiner === "") {
      alert("Please enter the examiner's name");
      setIsUploadClicked(false);
      return;
    } else if (year === "") {
      alert("Please enter the year of the paper");
      setIsUploadClicked(false);
      return;
    } else if (faculty === "Please selectimport Image from 'next/image'; your faculty...") {
      alert("Please select your faculty");
      setIsUploadClicked(false);
      return;
    } else if (selectedDepartment === "Please select your department...") {
      alert("Please select your department");
      setIsUploadClicked(false);
      return;
    } else if (selectedDepartment === "") {
      alert("Please select your department");
      setIsUploadClicked(false);
      return;
    } else if (faculty === "") {
      alert("Please select your faculty");
      setIsUploadClicked(false);
      return;
    } else {
      if (fileupload !== null) {
        const fieref = ref(
          storage,
          faculty + "/" + selectedDepartment + "/" + fileupload[0].name //this is the path where the file will be stored in firebase storage
        );
        const snapshot = await uploadBytes(fieref, fileupload[0]); //this uploads the file to firebase storage
        const downloadURL = await getDownloadURL(snapshot.ref); //this gets the download url of the file

        await addDoc(
          //this adds the data to firestore
          collection(db, "/" + faculty + "/programs/" + selectedDepartment), //this is the path where the data will be stored in firestore
          {
            //these are the fields that will be stored in firestore
            courseName,
            courseCode,
            examiner,
            year,
            downloadURL,
          }
        );
        const storageRef = ref(
          storage,
          faculty + "/" + selectedDepartment + "/" + fileupload[0].name
        );
        const uploadTask = uploadBytesResumable(storageRef, fileupload[0]);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (
              (snapshot.bytesTransferred / snapshot.totalBytes) *
              100
            ).toFixed(2);
            //console.log('Upload is ' + progress + '% done');
            setUploadProgress(parseFloat(progress));
          },
          (error) => {
            console.log(error);
          },
          () => {
            setUploadProgress(100);
            console.log(uploadProgress);
            console.log("Upload complete");
            setIsUploadClicked(false);
            alert(
              "You have successfully shared the paper with your colleagues. Thank you for your contribution we really appreciate it."
            );

          }
        );
      } else {
        alert("Please select a paper that you want to share");
      }
    }
  };

  const handleUploadClick = () => {
    setIsUploadClicked(true);
    upload();
  };

  //this is the return statement that returns the jsx
  return (
    <div className={styles.main}>
      <div className={styles.input}>
        <InputBox
          placeholder={"Course Name"}
          type={"text"}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <InputBox
          placeholder={"Course Code"}
          type={"text"}
          onChange={(e) => setCourseCode(e.target.value)}
        />
        <InputBox
          placeholder={"Examiner"}
          type={"text"}
          onChange={(e) => setExaminer(e.target.value)}
        />
        <InputBox
          placeholder={"Year"}
          type={"date"}
          onChange={(e) => setYear(e.target.value)}
        />
        <ComboBox onFacultyChange={setFaculty} />
        <ComboBoxDepartment
          faculty={faculty}
          onSelectedDepartmentChange={setSelectedDepartment}
        />
        <div className={styles.upload}>
          <input
            type="file"
            accept="application/pdf"
            className={styles.file}
            onChange={(event) => setfileupload(event.target.files)}
          />
          <button className={styles.button} onClick={handleUploadClick}>
            <div className={styles.divbtn}>
              <Image
                width={20}
                height={20}
                src="/upload.svg"
                alt="upload icon"
                className={styles.iconupload}
              />
              <p className={styles.text}>Upload file</p>
            </div>
          </button>
        </div>
        {isUploadClicked && (
          <div className={styles.progressBar}>
            <progress value={uploadProgress} max="100" className={styles.progress}>
              {uploadProgress}%
            </progress>
            <div className={styles.uploadstate}>{uploadProgress}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
