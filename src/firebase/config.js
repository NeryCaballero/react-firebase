import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBSrN7FZxPWeoacIdb_mQkAyGGmXpm9_34",
    authDomain: "photo-gallery-44a22.firebaseapp.com",
    projectId: "photo-gallery-44a22",
    storageBucket: "photo-gallery-44a22.appspot.com",
    messagingSenderId: "558176885195",
    appId: "1:558176885195:web:4af8af470adfc002e93e4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };