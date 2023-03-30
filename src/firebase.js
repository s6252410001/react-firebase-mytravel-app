// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT7C7C3-84IVux30PXMVh7APsLGRWyRds",
  authDomain: "mytravel-app-c8459.firebaseapp.com",
  projectId: "mytravel-app-c8459",
  storageBucket: "mytravel-app-c8459.appspot.com",
  messagingSenderId: "806879806403",
  appId: "1:806879806403:web:12dae446da7c9c9b183376",
  measurementId: "G-YXH8WHFKWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
