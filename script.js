const email = 'tryber@teste.com';
const password = '123456';
const emailField = document.getElementById('email-field').value;
const passwordField = document.getElementById('password-field').value;
const loginButton = document.getElementById('loginButton');

function compare() {
  if (email === emailField) return true;
  return false;
}

function loginAlert(confirmation) {
  if (confirmation === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

loginButton.addEventListener('click', loginAlert(compare()));

// loginAlert(compare());