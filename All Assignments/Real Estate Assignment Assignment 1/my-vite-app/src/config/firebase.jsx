import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDJk2a5vmN9fLJtvLps7j57bk4a3kbyQqo",
    authDomain: "reactfirstassignment-7311f.firebaseapp.com",
    projectId: "reactfirstassignment-7311f",
    storageBucket: "reactfirstassignment-7311f.firebasestorage.app",
    messagingSenderId: "290368893855",
    appId: "1:290368893855:web:eb3b9918cb01befbfe03aa",
    measurementId: "G-LZY7NSXHK6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);