// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb0iT3OSgBNmWeDntx0dSWqgeRha74rAE",
  authDomain: "vcontact-a4d52.firebaseapp.com",
  projectId: "vcontact-a4d52",
  storageBucket: "vcontact-a4d52.appspot.com",
  messagingSenderId: "550603233263",
  appId: "1:550603233263:web:731742f2606ef057ea481a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app);
