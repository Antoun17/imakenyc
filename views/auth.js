(function(){
    const config = {
        apiKey: "AIzaSyBAw8WIdDvcIOcj8F9c3CFmAP0tThMPzXg",
        authDomain: "imakenyc.firebaseapp.com",
        databaseURL: "https://imakenyc.firebaseio.com",
        projectId: "imakenyc",
        storageBucket: "imakenyc.appspot.com",
        messagingSenderId: "569887602205"
      };
      firebase.initializeApp(config);
      const auth = firebase.auth();

      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      const btnLogOut = document.getElementById('btnLogOut');

      btnLogin.addEventListener('click', e => {
          const email = txtEmail.value;
          const pass = txtPassword.value;
          
          firebase.auth().signInWithEmailAndPassword(email, pass).then(function(user) {
            // user signed in
         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
         
             if (errorCode === 'auth/wrong-password') {
                 alert('Wrong password.');
             } else {
                 alert(errorMessage);         
             }
             console.log(error);
         })
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user.uid);
        }
        else {
            console.log('No User');
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

       
      
}());