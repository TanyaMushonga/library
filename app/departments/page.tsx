'use client'
import React, { useState } from "react";

import styles from "./styles/pageStyles.module.css";
import SideBar from "./components/sideBar";
import SearchBar from "./components/searchBar";
import MainSection from "./components/mainSection";



const Department = ({ searchParams }: { searchParams: { faculty: string, department: string[] } }) => {
  let facultySelected = searchParams.faculty.toLowerCase();
  let department = searchParams.department;
  const [data, setData] = useState<any[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  console.log("this is the data...... " + data);

  const handleData = (newData: any[]) => {
    setData(newData);
  };

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <SideBar faculty={facultySelected} department={department} setSelectedDepartment={setSelectedDepartment} setSelectedFaculty={setSelectedFaculty} handleData={handleData} />
      </div>
      <div className={styles.mainSection}>
        <SearchBar />
        <MainSection selectedDepartment={selectedDepartment} selectedFaculty={selectedFaculty} data={data} />

      </div>
      <div>

      </div>

    </div>
  );
};

export default Department;


