  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "reactchat-b3739.firebaseapp.com",
    projectId: "reactchat-b3739",
    storageBucket: "reactchat-b3739.firebasestorage.app",
    messagingSenderId: "332330780308",
    appId: "1:332330780308:web:5c021c4a17daa2d33c5681"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  export const db = getFirestore();