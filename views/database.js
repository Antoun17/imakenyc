var config = {
    apiKey: "AIzaSyBAw8WIdDvcIOcj8F9c3CFmAP0tThMPzXg",
    authDomain: "imakenyc.firebaseapp.com",
    databaseURL: "https://imakenyc.firebaseio.com",
    projectId: "imakenyc",
    storageBucket: "imakenyc.appspot.com",
    messagingSenderId: "569887602205"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  
  const docRef = firestore.doc("Users/Data")

  const outputHeader = document.querySelector("#textOutput");
  const inputTextField = document.querySelector("#latestRequest");
  const saveButton = document.querySelector("#saveButton");
  const loadButton = document.querySelector("#loadButton");
  const btnLogin = document.querySelector("#btnLogin");
  const joinItTest = document.querySelector("#joinItTest");

  btnLogin.addEventListener("click", function(){
    window.location = '/login';
  })

  saveButton.addEventListener("click", function(){
    const textToSave = inputTextField.value;
    console.log("I am saving" + textToSave + "to Firestore");
    docRef.set({
      User: textToSave
    }).then(function() {
      console.log("Status saved!");
    }).catch(function (error) {
      console.log("Got and error:", error);
    });
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
    }
    else {
      window.location = '/login'; 
    }
  });

  btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut()
    .then(function(){
        console.log('Sucessfully Logged Out');
    })
    .catch(function(error) {
        console.log('not signed in');
        console.log(error);
    });
  });

  getRealtimeUpdates = function() {
    docRef.onSnapshot(function (doc){
      if (doc && doc.exists) {
        const myData = doc.data();
        outputHeader.innerText = "Database Status:" + myData.User;
      }
    })
  }

  getRealtimeUpdates();