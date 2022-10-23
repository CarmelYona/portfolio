import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './assets/styles/styles.scss'
import { App } from './app';
import { store } from './store/store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyCoome1UAqzRbmuPkWzx9SukDqLxcSnbJk",
  authDomain: "portfolio-ee398.firebaseapp.com",
  projectId: "portfolio-ee398",
  storageBucket: "portfolio-ee398.appspot.com",
  messagingSenderId: "754374068402",
  appId: "1:754374068402:web:ee5e37725962e818e2a1ab",
  measurementId: "G-450LQ19L5M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
