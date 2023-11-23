// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTtLPFI_sWhUzd8AyIaqmg2Yh-xwhNKD0",
  authDomain: "omec-hospital.firebaseapp.com",
  projectId: "omec-hospital",
  storageBucket: "omec-hospital.appspot.com",
  messagingSenderId: "271923917314",
  appId: "1:271923917314:web:d5beeaca9836c7a30c6d1b",
  measurementId: "G-NPL9EQD36H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
