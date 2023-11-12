'use client'
import React from "react";
import styles from "./../styles/searchBarStyles.module.css";
import styles1 from './../../homePageStyles.module.css';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const SearchBar = () => {
  const [searchParam, setSearchParam] = useState("");

  const db = getFirestore();

  const retrieveData = async () => {
    const dataArr: object[] = [];
    const querySnapshot = await getDocs(collection(db, "yourCollectionName"));
    querySnapshot.forEach((doc) => {
      dataArr.push(doc.data());
    });
    console.log(dataArr);
  };


  return (
    <div className={styles.searchNav}>
      <div className={styles.searchNavs}>
        <Link href={'/'} className={styles.link}>
          <Image src="/logo.jpg" alt="logo of nust" width={50} height={50} className={styles.image} />
          <h5 className={styles.header}>NUST LIBRARY</h5>
        </Link>
        <input type="search" placeholder="Search..." className={styles1.searchBar} value={searchParam} onChange={retrieveData} />
        <button className={styles.searchButton}>
          <Image src="/search.svg" alt="search icon" width={23} height={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
