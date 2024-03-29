// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4iGz5ILtPX6Edzu4pQ41eV4UE9kCDFzg",
  authDomain: "travel-guru-8791b.firebaseapp.com",
  projectId: "travel-guru-8791b",
  storageBucket: "travel-guru-8791b.appspot.com",
  messagingSenderId: "190305295114",
  appId: "1:190305295114:web:71e3a1b4f3d3a6fcc478f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;