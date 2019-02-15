(function(){
    const config = {
        apiKey: "AIzaSyCohX8N7ujFAzSNRD9FghQgAjFttNtxkkE",
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
          
          

          auth.signInWithEmailAndPassword(email, pass)
          .then(user => {
             window.location = '/';
          }).catch(error => {
              console.error(error);
          })
      });
      
   

}());