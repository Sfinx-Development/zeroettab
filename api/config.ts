// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
// const analytics = getAnalytics(app);

export { app,  };

// db, auth