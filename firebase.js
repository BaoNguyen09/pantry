// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt--9Z8XwOkGVPGurQlSsHsjLthUNpg9U",
  authDomain: "pantry-app-5c1bb.firebaseapp.com",
  projectId: "pantry-app-5c1bb",
  storageBucket: "pantry-app-5c1bb.appspot.com",
  messagingSenderId: "901037805416",
  appId: "1:901037805416:web:9a72f17df828e3305910dd",
  measurementId: "G-4F79WXWTCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}