import React from "react";

import styles from "./cardStyles.module.css";
import Image from "next/image";



type CardProps = {
  title: string;
  imageUrl: string;
};




const Card: React.FC<CardProps> = (props) => {


  return (
    <div className={styles.maincard} >

      <div className={styles.card} >
        <Image
          src={props.imageUrl}
          alt="fulcult of applied science"
          className={styles.applied}
          width={260}
          height={310}

        />
        <h5 className={styles.faculty} >{props.title}</h5>
      </div>

    </div>
  );
};

export default Card;
