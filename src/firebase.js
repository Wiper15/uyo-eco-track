import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your exact Firebase Web App Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD09V0Zy1BdC72tcy6uCibeaj265yJZH78",
  authDomain: "uyo-eco-track.firebaseapp.com",
  projectId: "uyo-eco-track",
  storageBucket: "uyo-eco-track.firebasestorage.app",
  messagingSenderId: "220690654676",
  appId: "1:220690654676:web:c57317ec9721f1c8636461",
  measurementId: "G-ZT20L7JMHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database and storage to use in your App.jsx later
export const db = getFirestore(app);
export const storage = getStorage(app);
