'use client'
import React, { useEffect, useState } from 'react'
import styles from './../styles/sidebarStyle.module.css';

import { app } from './../../../firebaseconfig';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

type mainProp = {
  setSelectedDepartment(innerText: string): void;
  setSelectedFaculty(faculty: string): void;
  faculty: string;
  department: string[];
  handleData(newData: any[]): void;

};

const SideBar: React.FC<mainProp> = ({ handleData, setSelectedFaculty, faculty, department, ...props }) => {

  const db = getFirestore(app);
  // let faculty = props.faculty;
  // let department = props.department || [];


  useEffect(() => {
    setSelectedFaculty(faculty);
  }, [faculty, setSelectedFaculty]);


  const fetchData = async (buttonValue: string) => {
    let clickedDepartment = buttonValue.toLowerCase();
    let facultyClicked = faculty.toLowerCase();
    const dbPath = "/" + facultyClicked + "/programs/" + clickedDepartment;
    const coursesCollection = collection(db, dbPath);

    const coursesSnapshot = await getDocs(coursesCollection);

    const coursesList = coursesSnapshot.docs.map(doc => ({
      id: doc.id,
      courseName: doc.data().courseName,
      courseCode: doc.data().courseCode,
      downloadURL: doc.data().downloadURL,
      examiner: doc.data().examiner,
      year: doc.data().year
    }));


    handleData(coursesList);
    // console.log(faculty);
    // console.log(clickedDepartment);
    // console.log(dbPath);
    console.log(coursesList);
  }

  return (
    <div>
      <div className={styles.header}><h2>{faculty.toUpperCase()}</h2></div>
      <ul className={styles.list}>
        <li>{department.map((dept: string, index: number) => (
          <button className={styles.button} key={index} onClick={(event) => { props.setSelectedDepartment(event.currentTarget.innerText), fetchData(event.currentTarget.innerText) }}>{dept}</button>
        ))}</li>

      </ul>
    </div>
  )
}

export default SideBar