// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNGwB1IWwlxYKDZmhCRr0CXkGkFzhBiSY",
  authDomain: "netflix-gpt-a5739.firebaseapp.com",
  projectId: "netflix-gpt-a5739",
  storageBucket: "netflix-gpt-a5739.appspot.com",
  messagingSenderId: "76556591692",
  appId: "1:76556591692:web:2a67fe46305de55d0acae9",
  measurementId: "G-J0Z9701WC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
