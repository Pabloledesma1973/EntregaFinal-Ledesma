import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAao6tZqgkMqrASVyKYTQtk5L79GaqeRh4",
  authDomain: "react-coderhouse-pl.firebaseapp.com",
  projectId: "react-coderhouse-pl",
  storageBucket: "react-coderhouse-pl.firebasestorage.app",
  messagingSenderId: "888559367737",
  appId: "1:888559367737:web:5769c0450b6b8389e97fe8",
  measurementId: "G-RRM7PQ3XR1"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };
