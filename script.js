const loginButton = document.getElementById('loginButton');
let isAuthorized = false;

function compare() {
  const emailField = document.getElementById('email-field').value;
  const passwordField = document.getElementById('password-field').value;

  if (emailField === 'tryber@teste.com' && passwordField === '123456') {
    isAuthorized = true;
  } else {
    isAuthorized = false;
  }
}

function loginAlert(confirmation) {
  if (confirmation === true) {
   alert('Olá, Tryber!');
  } else {
   alert('Email ou senha inválidos.');
  }
}


loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  compare();
  loginAlert(isAuthorized);
});
