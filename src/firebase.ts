// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBCTr3eFaR0F_chJUfDz0R6F1mWM02ONRg',

  authDomain: 'desk-d2f81.firebaseapp.com',

  projectId: 'desk-d2f81',

  storageBucket: 'desk-d2f81.appspot.com',

  messagingSenderId: '535586869733',

  appId: '1:535586869733:web:e604fff3c1cc15ee2a9f0c',

  measurementId: 'G-BLE1W3PJVF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
