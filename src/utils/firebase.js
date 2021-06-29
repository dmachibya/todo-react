import firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-K1JpbgjllfoWTHYpn_fLVo4D8sk8wEw",
    authDomain: "todo-76481.firebaseapp.com",
    projectId: "todo-76481",
    storageBucket: "todo-76481.appspot.com",
    messagingSenderId: "276850490031",
    appId: "1:276850490031:web:dfb1e2c52a4babfcd6b25a",
    measurementId: "G-70XSB5H1FR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;