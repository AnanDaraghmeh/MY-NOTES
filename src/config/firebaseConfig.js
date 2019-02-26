import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: process.env.REACT_APP_FIRE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGING_SENDER_ID
};

// Initialize Firebase
firebase.initializeApp(config);
// initialize firestore and auth
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
