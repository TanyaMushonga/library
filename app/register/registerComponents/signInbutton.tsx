import React from "react";
import styles from './../styles/signInBtnStles.module.css';
import Image from "next/image";
import { sign } from "crypto";
interface buttonProps {
  title: string;
  imgUrl: string;
  onClick: () => void;
}
const SignInbtn = (props: buttonProps) => {

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={props.onClick}>
        <div className={styles.btnItems}>
          <Image
            src={props.imgUrl}
            alt="an icon of button"
            className={styles.icon}

            width={30}
            height={30}
          />
          {props.title}
        </div>
      </button>
    </div>
  );
};

export default SignInbtn;
