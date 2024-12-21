// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration  // move this to ".env.local" for production
// const firebaseConfig = {
//   apiKey: "AIzaSyAVG_xuBIwmhXanjHRMor2lnrXfTxJVRLE",
//   authDomain: "book-store-app-mern-2024.firebaseapp.com",
//   projectId: "book-store-app-mern-2024",
//   storageBucket: "book-store-app-mern-2024.firebasestorage.app",
//   messagingSenderId: "663570252348",
//   appId: "1:663570252348:web:daa466871b8ac983203939"
// };

const firebaseConfig = { // import from file ".env.local" in frontend 
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//add extra
export const auth = getAuth(app);