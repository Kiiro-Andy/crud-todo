// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "APIDEFIREBASE",
  authDomain: "todo-app-2bc19.firebaseapp.com",
  projectId: "todo-app-2bc19",
  storageBucket: "todo-app-2bc19.appspot.com",
  messagingSenderId: "873490570152",
  appId: "1:873490570152:web:ec4cfa3fb0058d145f9b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
