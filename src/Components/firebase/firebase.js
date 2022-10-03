import firebase from 'firebase/app';
import 'firebase/database';

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB3D8udUv72YBsWTBfvgkfgwjMLhKYIkCM",
    authDomain: "crudapplication-83763.firebaseapp.com",
    projectId: "crudapplication-83763",
    storageBucket: "crudapplication-83763.appspot.com",
    messagingSenderId: "531440300379",
    appId: "1:531440300379:web:c103897dc8af93fcaaaa7e",
    measurementId: "G-WR9M5DBWLX"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)
 
export {db}

console.log('log',db);