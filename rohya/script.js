
function saveLoginData() {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

   var details = email+ password;
   console.log(details,"details of login");
    localStorage.setItem('loginEmail', email);
    localStorage.setItem('loginPassword', password);

    alert('Login information has been stored!');
}

const loginForm = document.querySelector('#LoginModal form'); 
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    saveLoginData(); 
    loginForm.reset(); 
});
