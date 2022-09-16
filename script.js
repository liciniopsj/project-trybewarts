const loginButton = document.getElementById('loginButton');
const checkbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerText = 500;
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

checkbox.onchange = function enableBtn() {
  if (this.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

textArea.addEventListener('input', () => {
  const textAreaLength = textArea.value.length;
  counter.innerText = 500 - textAreaLength;
});
