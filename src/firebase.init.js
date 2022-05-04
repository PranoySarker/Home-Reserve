// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrKZq8quiUcMjUYzxCIuvvBCQlCvwhwHI",
    authDomain: "home-reserve.firebaseapp.com",
    projectId: "home-reserve",
    storageBucket: "home-reserve.appspot.com",
    messagingSenderId: "1030316897205",
    appId: "1:1030316897205:web:9f965d23489c69e313dffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;