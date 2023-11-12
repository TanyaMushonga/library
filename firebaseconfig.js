// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4X4uS06EhUdQNspF2TqTdqiHdFKpRjRM",
  authDomain: "nust-library-3c0a5.firebaseapp.com",
  databaseURL: "https://nust-library-3c0a5-default-rtdb.firebaseio.com",
  projectId: "nust-library-3c0a5",
  storageBucket: "nust-library-3c0a5.appspot.com",
  messagingSenderId: "569171939770",
  appId: "1:569171939770:web:add009a6c02a54bf690d83",
  measurementId: "G-52ZX12S755",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
