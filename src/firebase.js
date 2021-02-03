import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCsDXr-RvqNroC2jHaS0aPzRynomVa_xLU",
    authDomain: "twitter-clone-react-1aaa3.firebaseapp.com",
    projectId: "twitter-clone-react-1aaa3",
    storageBucket: "twitter-clone-react-1aaa3.appspot.com",
    messagingSenderId: "82886346498",
    appId: "1:82886346498:web:d68df4168be8ea18c8241b",
};

const firebaseApp = firebase.initializedApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
