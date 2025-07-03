// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvTyJEAjvd05RZxhj9FK243zB4Q7AlIKY",//đưa dữ liệu vào .env
  authDomain: "fir-2440a.firebaseapp.com",
  projectId: "fir-2440a",
  storageBucket: "fir-2440a.firebasestorage.app",
  messagingSenderId: "622887436741",
  appId: "1:622887436741:web:fd28113b6bd972ebab0bac",
  measurementId: "G-4R8G65MW0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);