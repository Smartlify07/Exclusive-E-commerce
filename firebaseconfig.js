import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALhDqwBnS4iDzBoN5T_vKN-AcJXS0M4IY",
  authDomain: "exclusive-e-commerce.firebaseapp.com",
  projectId: "exclusive-e-commerce",
  storageBucket: "exclusive-e-commerce.appspot.com",
  messagingSenderId: "673370353259",
  appId: "1:673370353259:web:f3749d14d5105993640b2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
db._settings.timestampsInSnapshots = true;
