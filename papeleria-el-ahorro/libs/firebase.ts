// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9UpEPj6Okt1qlqc59-n6CdD27awv6un8",
  authDomain: "papeleria-el-ahorro-01.firebaseapp.com",
  projectId: "papeleria-el-ahorro-01",
  storageBucket: "papeleria-el-ahorro-01.firebasestorage.app",
  messagingSenderId: "425405966172",
  appId: "1:425405966172:web:e2f812a338acc69141c399",
  measurementId: "G-9VCV42ZX5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
