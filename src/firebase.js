import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FIREBASE_CONFIG } from "./firebase.config";

const firebaseConfig = FIREBASE_CONFIG; //replace with your own firebase project configuration. This should be placed in a file named firebase.config.js

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();