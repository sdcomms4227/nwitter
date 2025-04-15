import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const dbService = getFirestore(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, collection, addDoc, getDocs, orderBy, query, onSnapshot, deleteDoc, doc, updateDoc };
