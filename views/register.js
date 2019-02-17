(function(){
    import * as config from '../private/creds';

      firebase.initializeApp(config);
      const auth = firebase.auth();

      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnSignUp = document.getElementById('btnSignUp');

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })
}());


