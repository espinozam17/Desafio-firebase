// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbY71EVJ8Iwk-IaMTO2-dd-0NmShcwDk4",
  authDomain: "login-d6f70.firebaseapp.com",
  projectId: "login-d6f70",
  storageBucket: "login-d6f70.appspot.com",
  messagingSenderId: "67516564743",
  appId: "1:67516564743:web:2a4195cc0a9f6b2f8e71a2",
  measurementId: "G-VKR0T0CD56"
  };
  
export const app = initializeApp(firebaseConfig);
export default app;

/* Métodos de firebase Auth */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


// Initialize Firebase
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};