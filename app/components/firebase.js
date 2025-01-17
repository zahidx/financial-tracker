// components/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Firestore SDK
import { getFirestore, collection, addDoc } from "firebase/firestore";
// Realtime Database SDK
import { getDatabase } from "firebase/database";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD8YDmjGkmiFfOQALcAxuojrQn5tbn7Toc",
  authDomain: "financial-tracker-19a1f.firebaseapp.com",
  projectId: "financial-tracker-19a1f",
  storageBucket: "financial-tracker-19a1f.firebasestorage.app",
  messagingSenderId: "772752784421",
  appId: "1:772752784421:web:7b47ad8d1ad84cc3dc53cc",
  measurementId: "G-ZHT3505BY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Get Firestore instance
const db = getFirestore(app);

// Get Realtime Database instance
const database = getDatabase(app);

export { auth, db, database };
