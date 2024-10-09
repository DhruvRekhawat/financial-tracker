import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyC28BetptwcWLVbShnCtK3al686TgcurdA",
  authDomain: "financial-tracker-af078.firebaseapp.com",
  projectId: "financial-tracker-af078",
  storageBucket: "financial-tracker-af078.appspot.com",
  messagingSenderId: "143148055231",
  appId: "1:143148055231:web:5fbefa352010a998a7640a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)