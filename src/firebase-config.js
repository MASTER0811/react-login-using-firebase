import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDhh8rd3cbQOssljR9AhEcdvLVyRul1KY8",
    authDomain: "react-database-js.firebaseapp.com",
    projectId: "react-database-js",
    storageBucket: "react-database-js.appspot.com",
    messagingSenderId: "690659972655",
    appId: "1:690659972655:web:33f9d018718a4c276498da"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app )