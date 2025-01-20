// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSwA98DQBkKj-T-Znvc73VAyOcteiWB8o",
  authDomain: "alter-office-39abf.firebaseapp.com",
  projectId: "alter-office-39abf",
  storageBucket: "alter-office-39abf.firebasestorage.app",
  messagingSenderId: "836458644305",
  appId: "1:836458644305:web:132e983a3949efb18f8970",
  measurementId: "G-HSQTCG8CMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
