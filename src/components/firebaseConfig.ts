// src/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Analytics only works in browser environments
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase config (replace with your actual credentials)
const firebaseConfig = {
  apiKey: "AIzaSyDSIJeSnWpQZZm7BXooab86Laebsl95qDI",
  authDomain: "lerno-998e4.firebaseapp.com",
  projectId: "lerno-998e4",
  storageBucket: "lerno-998e4.appspot.com", // FIXED: should be .appspot.com
  messagingSenderId: "922338014144",
  appId: "1:922338014144:web:7ed3af0d781f5136e60e25",
  measurementId: "G-QJXSJZZJFW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth (Email/Password & Google)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore Database
export const db = getFirestore(app);

// Storage
export const storage = getStorage(app);

// Analytics (optional, only if supported and in browser)
export let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export default app;
