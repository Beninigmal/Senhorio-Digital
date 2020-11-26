import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAoBdL6ED6xk20k259UCQIL__9zHpusbcE",
    authDomain: "login-b52e2.firebaseapp.com",
    databaseURL: "https://login-b52e2.firebaseio.com",
    projectId: "login-b52e2",
    storageBucket: "login-b52e2.appspot.com",
    messagingSenderId: "245017631710",
    appId: "1:245017631710:web:e738da4510a11c6572db4f"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;