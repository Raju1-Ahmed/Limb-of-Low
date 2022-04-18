// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8uUOm0q__85BuzHp-L18rfQ7_-rtPio",
  authDomain: "limboflow-23a68.firebaseapp.com",
  projectId: "limboflow-23a68",
  storageBucket: "limboflow-23a68.appspot.com",
  messagingSenderId: "366695373313",
  appId: "1:366695373313:web:c20bbe58665cbcb4647e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;