import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDnEeqkMCK2rD9Bl8-_xsEokcmZMMyD8_g",
  authDomain: "reactfirebasecrud-9495b.firebaseapp.com",
  projectId: "reactfirebasecrud-9495b",
  storageBucket: "reactfirebasecrud-9495b.appspot.com",
  messagingSenderId: "246392884355",
  appId: "1:246392884355:web:f392cca7851c1070351fb6",
  measurementId: "G-DFTNV4RXFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}