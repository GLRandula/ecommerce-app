// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8h7BZIGuo8gGhClsgMh0FxLK7b4NT-Jk",
  authDomain: "shoppers-yt-2c536.firebaseapp.com",
  projectId: "shoppers-yt-2c536",
  storageBucket: "shoppers-yt-2c536.firebasestorage.app",
  messagingSenderId: "268880502888",
  appId: "1:268880502888:web:a46775a35b462cce20dbdd"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };