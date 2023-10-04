// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.TRAVEL_APIKEY,
  authDomain:import.meta.env.TRAVEL_AUTHDOMAIN,
  projectId:import.meta.env.TRAVEL_PROJECTID,
  storageBucket:import.meta.env.TRAVEL_STORAGEBUCKET,
  messagingSenderId:import.meta.env.TRAVEL_MESSAGINGSENDERID,
  appId:import.meta.env.TRAVEL_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;