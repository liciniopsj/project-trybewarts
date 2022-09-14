const loginButton = document.getElementById('loginButton');
const checkbox = document.getElementById('agreement');
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

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
})

checkbox.onchange = function() {
  const submitButton = document.getElementById('submit-btn');
  if (checkbox.checked) {
    submitButton.disabled = !!this.checked;
  }
}