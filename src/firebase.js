// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVDWOy8PMb9dvpqQYRMjVmi3TNvv9r38U",
    authDomain: "chat-application-b8798.firebaseapp.com",
    projectId: "chat-application-b8798",
    storageBucket: "chat-application-b8798.appspot.com",
    messagingSenderId: "537618637424",
    appId: "1:537618637424:web:4ccb0eef9a31a598efcab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);