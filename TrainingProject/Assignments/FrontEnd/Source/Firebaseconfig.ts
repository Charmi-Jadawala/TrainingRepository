// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOeVmCJ4xfjpHlbyTy39dka8gAk9PNXo",
  authDomain: "coursera-fedf9.firebaseapp.com",
  projectId: "coursera-fedf9",
  storageBucket: "coursera-fedf9.appspot.com",
  messagingSenderId: "304408592713",
  appId: "1:304408592713:web:149e6a8afc0056a9b19a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };