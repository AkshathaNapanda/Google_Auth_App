// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyAQihzQ5yYho95i0Uiy--So9Y1-svz3ccc",
    authDomain: "auth-app-deb29.firebaseapp.com",
    projectId: "auth-app-deb29",
    storageBucket: "auth-app-deb29.firebasestorage.app",
    messagingSenderId: "399204981821",
    appId: "1:399204981821:web:46dee0d054f12307339e54"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Return the signed-in user
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

// Google Sign-Out Function
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Sign-Out Error:", error);
  }
};
