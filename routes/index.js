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

    if (user) {
        console.log('You can view');
    }    else {
        window.location.replace('/login');
    }    