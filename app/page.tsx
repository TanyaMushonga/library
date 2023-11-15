"use client";
import Image from "next/image";

import styles from "./homePageStyles.module.css";
import Link from "next/link";
import Card from "./components/cardcomponentHomepage";


export default function Home() {
  const appliedScience = [
    "GIS",
    "Applied Biology and Chemistry",
    "Applied Chemistry",
    "Applied Physics",
    "Applied Mathematics",
    "Bio Technology",
    "Computer Science",
    "Environmental Science",
    "Forestry Resource",
    "Informatics",
    "Radiography",
    "Statistics Operations and Research",
    "Earth Science",
    "Business Analytics",
    "Public Healthy"
  ];

  const commerce = [
    "Accounting",
    "Acturial Science",
    "Banking and Investment Managemnent",
    "Finance",
    "Fiscal Studies",
    "Marketing",
    "Risk Management and Insurance",
    "Management",
    "Economics and Econometrics"
  ];

  const builtEnvironemnt = [
    "Architectural Studies",
    "Quantity Surveying",
    "Construction Management",
    "Estate and Management"
  ];

  const engineering = [
    "Civil and Water Engineering",
    "Electronic Engineering",
    "Industrial and Manufacturing Engineering",
    "Chemical Engineering",
    "Fibre and Polymer Materials Engineering"
  ]

  const communucation = [
    "Library and Information Science",
    "Journalism and Media Studies",
    "Records and Archives Management",
    "Information Management and Technology",
    "Media and Technology Studies"
  ]

  const scienceEducation = [
    "Design and Technology Education",
    "Bachelor of Science Education"
  ]

  const medicine = [
    "Medicine",
    "Nursing",
    "Mid Wifery"
  ];

  const sportsScience = [
    "Sports Science ",
    "Coaching"
  ];
  return (
    <main >

      <div className={styles.navBar}>
        <Image src="/logo.jpg" alt="logo of nust" width={90} height={100} />
        <h3 className={styles.header}>NUST LIBRARY</h3>
        <div className={styles.searchNav}>

          <input
            type="text"
            placeholder="Search by course code"
            className={styles.searchBar}
          />
          <button className={styles.searchButton}>
            <Image width={23} height={23} src="/search.svg" alt="search icon" />
          </button>

        </div>
      </div>
      <p className={styles.share}>
        click here to
        <Link href="/register" className={styles.link1}> share</Link>
      </p>
      <div className={styles.main}>
        <Link href={{ pathname: "/departments", query: { faculty: "Applied Science", department: appliedScience, }, }} className={styles.link}><Card title={"Applied Science"} imageUrl={"/applied.png"} /></Link>
        <Link href={{ pathname: "/departments", query: { faculty: "Commerce", department: commerce }, }} className={styles.link}><Card title={"Commerce"} imageUrl={"/commerce.png"} /></Link>
        <Link href={{ pathname: "/departments", query: { faculty: "Built Environment", department: builtEnvironemnt }, }} className={styles.link}> <Card title={"Built Environment"} imageUrl={"/built.png"} /></Link>
        <Link href={{ pathname: "/departments", query: { faculty: "Engineering", department: engineering }, }} className={styles.link}><Card title={"Engineering"} imageUrl={"/engineering.png"} /></Link>
        <Link href={{ pathname: "/departments", query: { faculty: "Communication", department: communucation }, }} className={styles.link}>  <Card title="Communication" imageUrl={"/communic.png"} /></Link>
        <Link href={{ pathname: "/departments", query: { faculty: "Science Education", department: scienceEducation }, }} className={styles.link}>  <Card title="Science and Education" imageUrl={"/education.png"} /></Link>
        <Link href={{ pathname: "/departments", query: { faculty: "Medicine", department: medicine }, }} className={styles.link}>   <Card title="Medicine" imageUrl={"/medicine.png"} /></Link>
        <Link href={{ pathname: "/departments", query: { faculty: "Sports Science", department: sportsScience }, }} className={styles.link}>    <Card title="Sports Science" imageUrl={"/sports.jpeg"} /></Link>
      </div>
    </main>
  );
}


