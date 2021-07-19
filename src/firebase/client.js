// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmpITEhYbD8HVj1O4S95mDBmXGFMl-kLg",
    authDomain: "shopping-city-3e4e4.firebaseapp.com",
    projectId: "shopping-city-3e4e4",
    storageBucket: "shopping-city-3e4e4.appspot.com",
    messagingSenderId: "643695101327",
    appId: "1:643695101327:web:54a45f6d2ac8a573c977fa",
    measurementId: "G-0F34R0LQ5Y"
  };

  firebase.initializeApp(firebaseConfig);


  const db=firebase.firestore();

  export default db
