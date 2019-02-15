var auth = require('../auth');


var config = {
    apiKey: "AIzaSyCohX8N7ujFAzSNRD9FghQgAjFttNtxkkE",
    authDomain: "imakenyc.firebaseapp.com",
    databaseURL: "https://imakenyc.firebaseio.com",
    projectId: "imakenyc",
    storageBucket: "imakenyc.appspot.com",
    messagingSenderId: "569887602205"
  };
  firebase.initializeApp(config);
  const auth = firebase.auth();

  var user = firebase.auth().currentUser;

  auth.signInWithEmailAndPassword(email, pass)
  .then(user => {
     window.location = '/';
  }).catch(error => {
      window.location = '/login';
      console.error(error);
  })

  