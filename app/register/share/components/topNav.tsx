import React from "react";
import styles from "./../styles/topNavStyles.module.css";
import Image from "next/image";
import Link from "next/link";
const TopNav = () => {
  return (
    <div className={styles.topnav}>
      <div >
        <Link href={"/"} className={styles.leftElements}>
          <Image src="/logo.jpg" alt="logo of nust" width={90} height={100} />
          <h3 className={styles.header}>NUST LIBRARY</h3>
        </Link>
      </div>
      <div className={styles.share}>
        <h2>Share past exam paper with your colleagues</h2>
      </div>
    </div>
  );
};

export default TopNav;
