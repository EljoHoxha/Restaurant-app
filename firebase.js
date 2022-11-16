import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqYk21UCMWs4aG-RH8ApsR-eypSX5DNR0",
  authDomain: "uber-eats-clone-367611.firebaseapp.com",
  projectId: "uber-eats-clone-367611",
  storageBucket: "uber-eats-clone-367611.appspot.com",
  messagingSenderId: "418715616336",
  appId: "1:418715616336:web:63ada913297a7c0fa1bd55",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
