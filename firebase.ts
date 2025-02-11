// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuKweg8aPh2RgXhOxdozJ8nH93I7IyxkY",
  authDomain: "shppers-yt-4172f.firebaseapp.com",
  projectId: "shppers-yt-4172f",
  storageBucket: "shppers-yt-4172f.firebasestorage.app",
  messagingSenderId: "530605975680",
  appId: "1:530605975680:web:2272de0953eccbfabc9e65"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

