// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKxJWgbCVV3zB83d_a8ErgdXOVmdRLpY4",
  authDomain: "netflixgpt-c2b66.firebaseapp.com",
  projectId: "netflixgpt-c2b66",
  storageBucket: "netflixgpt-c2b66.appspot.com",
  messagingSenderId: "113216963307",
  appId: "1:113216963307:web:aba129306130c50c2e34ae",
  measurementId: "G-S54VT5KDBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();