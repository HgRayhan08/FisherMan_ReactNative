// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPRVX37_oCnQJ17fj5Azt7-1WuNjtqGas",
  authDomain: "rpl-fisherman.firebaseapp.com",
  projectId: "rpl-fisherman",
  storageBucket: "rpl-fisherman.appspot.com",
  messagingSenderId: "501491809171",
  appId: "1:501491809171:web:2a8cb589696b8d8e570666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const db = getFirestore(app);

export { Auth, db };
