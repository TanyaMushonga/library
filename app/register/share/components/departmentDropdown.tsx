// Date Created: Nov 7 2023 01:00:00 AM
//this code was written by Tanyaradzwa T Mushonga and is owned by Tanyaradzwa T Mushonga

//imports start here
import React, { useState } from "react";
import styles from "./../styles/dropdownStyles.module.css";

//this is the interface for the props of the component that is exported to the main section of the page
interface ComboBoxDepartmentProps {
  faculty: string; //this is the faculty that is selected in the dropdown
  onSelectedDepartmentChange: (department: string) => void; //this is the function that handles the change in the dropdown
}

//this is the main function for the component that is exported to the main section of the page
const ComboBoxDepartment: React.FC<ComboBoxDepartmentProps> = ({
  faculty,
  onSelectedDepartmentChange,
}) => {
  //this is the state for the selected option in the dropdown
  const [selectedOption, setSelectedOption] = useState("");
  let department: string[] = []; //this is the array that holds the departments

  //this is the an if statement that handles the change in the dropdown
  if (faculty === "applied science") {
    department = [
      "GIS",
      "applied biology and bio chemistry",
      "applied chemistry",
      "applied physics",
      "applied mathematics",
      "bio technology",
      "computer science",
      "environmental science",
      "forestry resource",
      "informatics",
      "radiography",
      "statistics operations and research",
      "earth science",
      "business analytics",
      "public healthy",
    ];
  } else if (faculty === "commerce") {
    department = [
      "accounting",
      "acturial science",
      "banking and investment management",
      "finance",
      "fiscal studies",
      "marketing",
      "risk management and insurance",
      "management",
      "economics and econometrics",
    ];
  } else if (faculty === "built environment") {
    department = [
      "architecture studies",
      "quantity surveying",
      "construction management",
      "estate and management",
    ];
  } else if (faculty === "engineering") {
    department = [
      "civil and water engineering",
      "electronic engineering",
      "industrial and manufacturing engineering",
      "chemical engineering",
      "fibre and polymer materials engineering",
    ];
  } else if (faculty === "communication") {
    department = [
      "library and information science",
      "journalism and media studies",
      "records and archives management and technology",
      "information management and technology",
      "media and technology studies",
    ];
  } else if (faculty === "medicine") {
    department = ["medicine", "nursing", "mid wifery"];
  } else if (faculty === "science education") {
    department = [
      "Design and Technology Education",
      "Bachelor of Science Education",
    ];
  } else if (faculty === "sports science") {
    department = ["sports science and coaching"];
  }

  // this is a function that handles the change in the dropdown
  const handleChange = (event: { target: { value: string } }) => {
    onSelectedDepartmentChange(event.target.value); //this calls the onSelectedDepartmentChange function that is passed as a prop to the component
    setSelectedOption(event.target.value); //this sets the selected option to the value of the dropdown
  };
  //this is the return statement for the component that returns the dropdown
  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="">Please select your department...</option>
        {department.map((dept, index) => (
          <option value={dept} key={index}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBoxDepartment;
