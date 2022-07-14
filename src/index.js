import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK2viQFxZ6jWW-zjg28rnq6BLvEcGdRsM",
  authDomain: "banban-8d083.firebaseapp.com",
  databaseURL: "https://banban-8d083-default-rtdb.firebaseio.com",
  projectId: "banban-8d083",
  storageBucket: "banban-8d083.appspot.com",
  messagingSenderId: "783161635536",
  appId: "1:783161635536:web:67725ae794a416e57464d5",
  measurementId: "G-BWWM3K1TXE"
};

// Initialize Firebase
export const FIREBASE = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
