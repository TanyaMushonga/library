"use client";
import React, { useEffect } from "react";
import styles from "./styles/registerStyles.module.css";
import InputBox from "./registerComponents/inputbox";
import SignInbtn from "./registerComponents/signInbutton";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import firebase from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { useRouter } from 'next/navigation';
import { app } from './../../firebaseconfig';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleauthProvider = new GoogleAuthProvider();
  const githubauthProvider = new GithubAuthProvider();
  const auth = getAuth(app);
  const router = useRouter();


  const signUpwithGoogle = () => {

    signInWithRedirect(auth, googleauthProvider);
  };




  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          console.log(result.user);
          router.push('/register/share');
        }
      })
      .catch((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert('Email already associated with another account');
          setEmail("");
        } else {
          console.log(error);
        }
      });
  }, [auth, router]);

  const signUpwithGitHub = () => {
    signInWithPopup(auth, githubauthProvider).then((response) => {
      console.log(response.user);
      router.push('/register/share');


    }).catch((error) => {
      if (error.code === 'auth/account-exists-with-different-credential') {
        alert('Email already associated with another account');
        setEmail("");
      } else {
        console.log(error);
      }
    });
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      router.push('/register/share');
    } catch (error) {
      console.error(error);
      alert("Email or password is incorrect");
      setEmail("");
      setPassword("");
    }
  }


  return (
    <div className={styles.register}>
      <div className={styles.top}>
        <h4 className={styles.signin}> Sign In</h4>
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

        <SignInbtn title="Sign In" imgUrl="/signin.svg" onClick={signIn} />
        <p className={styles.or}>Or</p>

        <SignInbtn title="Sign in with Google" imgUrl="/google.svg" onClick={signUpwithGoogle} />
        <br />
        <SignInbtn title="Sign in with GitHub" imgUrl="/github.svg" onClick={signUpwithGitHub} />
        <p className={styles.link}>Dont have account? <Link href="/register/signup" className={styles.link1}> Sign Up</Link></p>

      </div>
    </div>
  );
};

export default Register;
