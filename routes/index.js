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

  firebase.auth().signInWithEmailAndPassword(user => {
    if (user) {
        window.location = '/views/index.html';
    }
})