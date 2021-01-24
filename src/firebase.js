// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArjZ0dqeiLR3n4H8iRbKn1omqOqR0wjWs",
    authDomain: "fakeblock-shopping.firebaseapp.com",
    databaseURL: "https://fakeblock-shopping.firebaseio.com",
    projectId: "fakeblock-shopping",
    storageBucket: "fakeblock-shopping.appspot.com",
    messagingSenderId: "741578677340",
    appId: "1:741578677340:web:dbe63629a55e102c9bda99",
    measurementId: "G-HE90RXFWP2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};