import React from "react";
import styles from "./../styles/mainsectionStyles.module.css";



type mainProp = {
  selectedDepartment: string;
  selectedFaculty: string;
  data: { id: string, courseName: string, courseCode: string, downloadURL: string, examiner: string, year: string }[];
};



const MainSection: React.FC<mainProp> = ({ data, selectedDepartment, selectedFaculty }) => {

  let department = selectedDepartment;
  let faculty = selectedFaculty;


  return (
    <div className={styles.main}>
      <div className={styles.department}>
        <h2 className={styles.dept}>{department}</h2>
      </div>
      <div>
        <table className={styles.table}>
          <thead className={styles.tbheader}>
            <tr>
              <th className={styles.tbheader}>Course Name</th>
              <th className={styles.tbheader}>Course Code</th>
              <th className={styles.tbheader}>Examiner</th>
              <th className={styles.tbheader}>Year</th>
              <th className={styles.tbheader}>Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((course) => (
              <tr className={styles.tablerow} key={course.id}>
                <td className={styles.td}>{course.courseName}</td>
                <td className={styles.td}>{course.courseCode}</td>
                <td className={styles.td}>{course.examiner}</td>
                <td className={styles.td}>{course.year}</td>
                <td className={styles.td}>
                  <button className={styles.download} ><a href={course.downloadURL} download>Download</a></button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>

      </div>
    </div>
  );
};

export default MainSection;
