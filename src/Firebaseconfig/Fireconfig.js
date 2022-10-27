// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9pRQJBAFJOVXJu7CfrGrUOWuT-KoLXO8",
  authDomain: "e-learn-56a1c.firebaseapp.com",
  projectId: "e-learn-56a1c",
  storageBucket: "e-learn-56a1c.appspot.com",
  messagingSenderId: "1040636006737",
  appId: "1:1040636006737:web:fa6e757ea06fe9aa42c370",
  measurementId: "G-CVFGJK7JB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;