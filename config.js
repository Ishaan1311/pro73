import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDTOYJ6yFKtgUvyUlzhfOGLaPI0Da6yp6c",
  authDomain: "e-libaryapp.firebaseapp.com",
  projectId: "e-libaryapp",
  storageBucket: "e-libaryapp.appspot.com",
  messagingSenderId: "515376580575",
  appId: "1:515376580575:web:d906abb51b7e6ce98a266a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
