// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApbbLj87RGc2fH0C8ezj0NMxs04dLVePY",
  authDomain: "tsubasa-8fd85.firebaseapp.com",
  projectId: "tsubasa-8fd85",
  storageBucket: "tsubasa-8fd85.firebasestorage.app",
  messagingSenderId: "664269037494",
  appId: "1:664269037494:web:0b89d237ecc7f163456b17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db =getFirestore(app);
export default app;

