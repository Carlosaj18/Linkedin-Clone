// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC51Ls0fyQOLUmpmphaNMDkRsj6zMHc7sU",
  authDomain: "linkedin-55435.firebaseapp.com",
  projectId: "linkedin-55435",
  storageBucket: "linkedin-55435.appspot.com",
  messagingSenderId: "245980652397",
  appId: "1:245980652397:web:486e74442ab326fa957064"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };