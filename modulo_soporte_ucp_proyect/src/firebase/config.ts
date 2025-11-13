// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdcC9bvJ52wV7ixiL3Qy6pSgvgFb_Z75E",
  authDomain: "modulosoporte-7e9dc.firebaseapp.com",
  projectId: "modulosoporte-7e9dc",
  storageBucket: "modulosoporte-7e9dc.firebasestorage.app",
  messagingSenderId: "266030208608",
  appId: "1:266030208608:web:434dc2ee22d105f9a89505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();