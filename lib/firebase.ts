// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-RGQnIm7NQONtRfzriiNZdqKNTF2ro-w",
  authDomain: "locationapp-286ef.firebaseapp.com",
  projectId: "locationapp-286ef",
  storageBucket: "locationapp-286ef.firebasestorage.app",
  messagingSenderId: "432053413388",
  appId: "1:432053413388:web:faa58c7889d2c7bc8e7029",
  measurementId: "G-MEMLW5J7Y3"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firebase_db = getFirestore(firebase);
