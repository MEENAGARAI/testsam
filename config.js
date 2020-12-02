import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBxyn1ukdgO_gMT4HGMhtdhEQfH8r3BpMc",
  authDomain: "booksanta-71112.firebaseapp.com",
  databaseURL: "https://booksanta-71112.firebaseio.com",
  projectId: "booksanta-71112",
  storageBucket: "booksanta-71112.appspot.com",
  messagingSenderId: "373592710059",
  appId: "1:373592710059:web:673ea4c36bc3a61ba190ee"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
