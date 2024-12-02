import firebase from "firebase";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvg88hAZ0S42NRfmad8fnn5kzlFmpNF0",
  authDomain: "habbittracker-97af5.firebaseapp.com",
  databaseURL: "https://testfb8-a772e.firebaseapp.com",
  projectId: "habbittracker-97af5",
  storageBucket: "habbittracker-97af5.firebasestorage.app",
  messagingSenderId: "903961025098",
  appId: "1:903961025098:web:0aa192f6df8e775053e4b3",
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore instance
const db = firebase.firestore();

export { db };
