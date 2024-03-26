// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MSI,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREID,
};

export const app =
  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
