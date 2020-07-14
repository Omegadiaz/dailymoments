import * as firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAa_MSfpQwGyWbyTc62QR8dsHX_iol0ElE",
    authDomain: "daily-moments-db0cf.firebaseapp.com",
    databaseURL: "https://daily-moments-db0cf.firebaseio.com",
    projectId: "daily-moments-db0cf",
    storageBucket: "daily-moments-db0cf.appspot.com",
    messagingSenderId: "4205517748",
    appId: "1:4205517748:web:86a809087c03aacaf1b0e1",
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();
