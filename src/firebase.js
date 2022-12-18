import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvx0A6NUNC6QbaYzS9lvgim1olLgwNENo",
  authDomain: "phone-authentication-57b90.firebaseapp.com",
  projectId: "phone-authentication-57b90",
  storageBucket: "phone-authentication-57b90.appspot.com",
  messagingSenderId: "759661405810",
  appId: "1:759661405810:web:f6b42d60814eea6f16c4eb"
};

//Inialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
