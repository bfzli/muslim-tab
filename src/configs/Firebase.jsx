import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const Config = {
  apiKey: "AIzaSyAzBDMyPL5FT4Dq4jj54wE3NrgY57FbPqQ",
  authDomain: "entrepreneur-tab.firebaseapp.com",
  projectId: "entrepreneur-tab",
  storageBucket: "entrepreneur-tab.appspot.com",
  messagingSenderId: "324563739295",
  appId: "1:324563739295:web:8c2bab78c7ed6c0d0938aa",
  measurementId: "G-KWCCXDPYV8"
};

let Firebase;
let FB_ERROR = "Firebase initialization error.";

try {
  Firebase = initializeApp(Config);
} catch (err) {
  if (!/already exists/.test(err.message)) console.error(FB_ERROR, err.stack);
}

export const Auth = getAuth(Firebase);
export const Storage = getStorage(Firebase);
export const Database = getFirestore(Firebase);
export default Firebase;