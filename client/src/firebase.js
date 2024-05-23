// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ab974.firebaseapp.com",
  projectId: "mern-estate-ab974",
  storageBucket: "mern-estate-ab974.appspot.com",
  messagingSenderId: "260174719355",
  appId: "1:260174719355:web:2cad58a9809287232ff5de",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
