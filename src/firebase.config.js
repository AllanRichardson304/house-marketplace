// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANLKBIbH1QBqP2cwoAxwi3g52WSnU8kbM",
  authDomain: "house-marketplace-app-58f01.firebaseapp.com",
  projectId: "house-marketplace-app-58f01",
  storageBucket: "house-marketplace-app-58f01.appspot.com",
  messagingSenderId: "543064306416",
  appId: "1:543064306416:web:9cf329e2b5477fa4cdc835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()