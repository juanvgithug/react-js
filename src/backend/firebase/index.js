import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime databas
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

const app = firebase.initializeApp({
  apiKey: "AIzaSyDkUXSgCKYUCwzatqWrKWDfnD1WA5pinGE",
  authDomain: "tiendareactx.firebaseapp.com",
  projectId: "tiendareactx",
  storageBucket: "tiendareactx.appspot.com",
  messagingSenderId: "976408428642",
  appId: "1:976408428642:web:57ed335cf0c80c79c0113b",
});

export const getFirebase = () => {
  return app;
};

//Para llamar a la base de datos
export const getFirestore = () => {
  return firebase.firestore();
};
