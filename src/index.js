// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuRZZo8Zmz4laF7rQ81eJ2zWa3RdXvwGM",
  authDomain: "berkelana-database.firebaseapp.com",
  databaseURL: "https://berkelana-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "berkelana-database",
  storageBucket: "berkelana-database.appspot.com",
  messagingSenderId: "161032378459",
  appId: "1:161032378459:web:f9000e879988ef02ba477e",
  measurementId: "G-0NV39GH08B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();