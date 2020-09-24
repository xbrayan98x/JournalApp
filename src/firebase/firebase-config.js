import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsCyJyfYJF2jJtSyKZstV9U-990g_GS7k",
    authDomain: "react-app-curso-journal.firebaseapp.com",
    databaseURL: "https://react-app-curso-journal.firebaseio.com",
    projectId: "react-app-curso-journal",
    storageBucket: "react-app-curso-journal.appspot.com",
    messagingSenderId: "898124882045",
    appId: "1:898124882045:web:adb124c0cb68c307f25114"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}