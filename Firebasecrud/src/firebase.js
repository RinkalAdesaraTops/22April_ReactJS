import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDELU5YhnEpzWZyuR3Sg5AH1rudbE1FOtE",
  authDomain: "reactdemoproject-ea478.firebaseapp.com",
  projectId: "reactdemoproject-ea478",
  storageBucket: "reactdemoproject-ea478.appspot.com",
  messagingSenderId: "303174342274",
  appId: "1:303174342274:web:a2d8615fb570aee776469b",
  measurementId: "G-1BQYJWH0L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}