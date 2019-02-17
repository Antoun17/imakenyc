(function(){
<<<<<<< HEAD
    import * as config from '../private/creds';

=======
    const config = {
        apiKey: "AIzaSyBAw8WIdDvcIOcj8F9c3CFmAP0tThMPzXg",
        authDomain: "imakenyc.firebaseapp.com",
        databaseURL: "https://imakenyc.firebaseio.com",
        projectId: "imakenyc",
        storageBucket: "imakenyc.appspot.com",
        messagingSenderId: "569887602205"
      };
>>>>>>> b2ad86780c054f26d80e4cbc9fd3d2059b833a21
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


