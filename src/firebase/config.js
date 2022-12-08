// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAdPxYjjqgdrrfw79uK4cp4vq8TY5vi4ug",
  authDomain: "your-hour-kit.firebaseapp.com",
  projectId: "your-hour-kit",
  storageBucket: "your-hour-kit.appspot.com",
  messagingSenderId: "415262344562",
  appId: "1:415262344562:web:0a16035a8c1fe6b666c9eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getFirestore(app);
export default app;