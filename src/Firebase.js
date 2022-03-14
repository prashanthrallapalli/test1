// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from 'firebase/storage'
import {getFirestore, serverTimestamp} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyDQqMzHq3WpMFSqtsL7dPp0fs3246KXl00",
  authDomain: "linkedinprallapalli.firebaseapp.com",
  projectId: "linkedinprallapalli",
  storageBucket: "linkedinprallapalli.appspot.com",
  messagingSenderId: "554025512489",
  appId: "1:554025512489:web:80f382079126645991b638"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();
export {app, db, auth, provider, timestamp ,storage };