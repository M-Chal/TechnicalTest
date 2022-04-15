import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAMmB2sJmBWO9FE3De87iBhAky78uGQRtQ",
  authDomain: "lottie-e0cc6.firebaseapp.com",
  projectId: "lottie-e0cc6",
  storageBucket: "lottie-e0cc6.appspot.com",
  messagingSenderId: "1084975017773",
  appId: "1:1084975017773:web:1b16afb05bbd412132eda4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, app}