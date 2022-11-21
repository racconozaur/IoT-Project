// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3B-p-pHvg6RrPCzM7D6F-bDW3X6yUi7c",
  authDomain: "iotproject-6f5b2.firebaseapp.com",
  databaseURL: "https://iotproject-6f5b2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iotproject-6f5b2",
  storageBucket: "iotproject-6f5b2.appspot.com",
  messagingSenderId: "638391476155",
  appId: "1:638391476155:web:ffc15b5ead5eaca269ee9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


