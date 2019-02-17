(function(){
    import * as config from '../private/creds';

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

module.exports = auth;
