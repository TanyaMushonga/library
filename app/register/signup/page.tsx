"use client";
import React from "react";
import styles from "./../styles/registerStyles.module.css";
import InputBox from "./../registerComponents/inputbox";
import SignInbtn from "../registerComponents/signInbutton";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "./../../../firebaseconfig";

const Register = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [idNumber, setidNumber] = useState("");
  const router = useRouter();

  const signUp = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@#]{8,}$/;
    if (
      idNumber === "" ||
      fullname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("please fill all fields");
      return;
    } else if (password !== confirmPassword) {
      alert("passwords do not match");
      setPassword("");
      setConfrimPassword("");
      return;
    } else if (!passwordRegex.test(password)) {
      alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long");
      setPassword("");
      setConfrimPassword("");
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
        alert("You have successfully created an account you can now share past exam papers with your fellow students");
        router.push('/register');
        console.log(response.user);
      })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            alert('Email address already in use by another account');
            setEmail("");
          } else {
            console.log(error);
          }
        });
    }
  };



  return (
    <div className={styles.register}>
      <div className={styles.top}>
        <h4 className={styles.signin}>Sign Up</h4>
        <Image
          className={styles.logo}
          src="/signin.svg"
          alt="logo"
          width={90}
          height={90}
        />
      </div>
      <div className={styles.conatiner}>
        <InputBox
          type="text"
          placeholder="Staff or Student number"
          onChange={(e) => {
            setidNumber(e.target.value);
          }}
          value={idNumber}
        />
        <InputBox
          type="text"
          placeholder="Fullname"
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          value={fullname}
        />
        <InputBox
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <InputBox
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);

          }}
          value={password}
        />


        <InputBox
          type="password"
          placeholder="Confirm password"
          onChange={(e) => {
            setConfrimPassword(e.target.value);
          }}
          value={confirmPassword}
        />

        <SignInbtn
          title="Create an Account"
          imgUrl="/signin.svg"
          onClick={signUp}
        />
        <p className={styles.link}>
          Alread have account?{" "}
          <Link href="/register" className={styles.link1}>
            {" "}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
