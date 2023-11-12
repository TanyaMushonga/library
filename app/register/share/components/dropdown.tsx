// Date Created: Nov 7 2023 01:00:00 AM
//this code was written by Tanyaradzwa T Mushonga and is owned by Tanyaradzwa T Mushonga

//imports start here
import React, { useState } from "react";
import styles from "./../styles/dropdownStyles.module.css";

//this is the interface for the props
interface ComboBoxProps {
  onFacultyChange: (value: string) => void; //this is the function that handles the change in the dropdown
}

//this is the main function for the component that is exported to the main section of the page
const ComboBox: React.FC<ComboBoxProps> = ({ onFacultyChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  //this is the function that handles the change in the dropdown
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); //this sets the selected option to the value of the dropdown
    onFacultyChange(event.target.value); //this calls the onFacultyChange function that is passed as a prop to the component
  };

  //this is the return statement for the component that returns the dropdown
  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className={styles.select}
      >
        <option value=" ">Please select your faculty...</option>
        <option value="applied science">Faculty of Applied Science</option>
        <option value="commerce">Faculty of Commerce</option>
        <option value="built environment">Faculty of Built Environment</option>
        <option value="engineering">Faculty of Engineering</option>
        <option value="communication">Faculty of Communication</option>
        <option value="medicine">Faculty of Medicine</option>
        <option value="science education">Faculty of Science Education</option>
        <option value="sports science">Faculty of Sports Science</option>
      </select>
    </div>
  );
};

export default ComboBox;
