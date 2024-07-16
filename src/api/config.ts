// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5X2knxXxvRjbAgTDMkLcjZtUyEqy3X68",
  authDomain: "zeroett-webbshop.firebaseapp.com",
  projectId: "zeroett-webbshop",
  storageBucket: "zeroett-webbshop.appspot.com",
  messagingSenderId: "571539147618",
  appId: "1:571539147618:web:b37d601aa0aaef39813a3b",
  measurementId: "G-B6H5Q6S7RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// } använd denna sen och ändra till true

// const analytics = getAnalytics(app);



// db, auth