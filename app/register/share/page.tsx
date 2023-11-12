'use client';
import React from "react";
import styles from "./styles/pagesStyles.module.css";
import TopNav from "./components/topNav";
import MainSection from "./components/mainSection";

const SharePaper = () => {
  return (
    <div className={styles.main}>

      <TopNav />
      <MainSection />
    </div>
  );
};

export default SharePaper;
