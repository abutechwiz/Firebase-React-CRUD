import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyALbtrY6LlN7Bb5lsTY2kWstMSxjN5OKfo",
    authDomain: "crud-app-8e195.firebaseapp.com",
    projectId: "crud-app-8e195",
    storageBucket: "crud-app-8e195.appspot.com",
    messagingSenderId: "528983061601",
    appId: "1:528983061601:web:87aaeb2866a1baa24c6620",
    measurementId: "G-8YL7XX1JKR"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
