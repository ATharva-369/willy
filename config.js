import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyD5bjCGaR-_n630Fy2SKYDEb9xWHFJXXeY",
    authDomain: "willy-e5c61.firebaseapp.com",
    projectId: "willy-e5c61",
    storageBucket: "willy-e5c61.appspot.com",
    messagingSenderId: "806785510004",
    appId: "1:806785510004:web:51438e5e5f9f11f1b0bf21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()