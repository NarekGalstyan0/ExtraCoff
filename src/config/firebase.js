// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdpX9p9mCRy8wes53-fOwsrKFlRsC5cH0",
  authDomain: "coffee-shop-8d0da.firebaseapp.com",
  projectId: "coffee-shop-8d0da",
  storageBucket: "coffee-shop-8d0da.appspot.com",
  messagingSenderId: "57782902060",
  appId: "1:57782902060:web:b3d49a8dad5ace8df92089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()