// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9c829.firebaseapp.com",
  projectId: "reactchat-9c829",
  storageBucket: "reactchat-9c829.firebasestorage.app",
  messagingSenderId: "1050648843040",
  appId: "1:1050648843040:web:9fb29075339e4582fe3d45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);