import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDg-pogzD7_cgknm3USEtibUBQ6Sx9N68I",
    authDomain: "disney-clone-34e17.firebaseapp.com",
    projectId: "disney-clone-34e17",
    storageBucket: "disney-clone-34e17.appspot.com",
    messagingSenderId: "923207614355",
    appId: "1:923207614355:web:1817c5a12fe41f9f68f266"
  };

 // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };