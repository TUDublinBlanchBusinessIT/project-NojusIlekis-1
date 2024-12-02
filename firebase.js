import firebase from "firebase";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8P4Tv3KO16VxekOfSYpRI0ZAWhghN3j8",
  authDomain: "firstfirebaseproject-e362a.firebaseapp.com",
  databaseURL: "https://testfb8-a772e.firebaseapp.com",
  projectId: "firstfirebaseproject-e362a",
  storageBucket: "firstfirebaseproject-e362a.firebasestorage.app",
  messagingSenderId: "26917379474",
  appId: "1:26917379474:web:90355aa5db3ed1bcb8354b",
};

// Initialize Firebase only once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore instance
const db = firebase.firestore();

export { db };

