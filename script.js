const loginButton = document.getElementById('loginButton');
const checkbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
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

function getFullName() {
  const studentName = document.getElementById('input-name').value;
  const studentLastName = document.getElementById('input-lastname').value;
  document.getElementById('studentFullName').innerText = `Nome: ${studentName} ${studentLastName}`;
}

function getMailAndHome() {
  const studentEmail = document.getElementById('studentEmail');
  const studentHouse = document.getElementById('studentHouse')
  studentEmail.innerText = `Email: ${document.getElementById('input-email').value}`;
  studentHouse.innerText = `Casa: ${document.getElementById('house').value}`;
}

function getSubjectArray() {
  const subjectArray = document.querySelectorAll('input[name=subject]:checked');
  const subjectArrayValues = [];
  for (let i = 0; i < subjectArray.length; i += 1) {
    subjectArrayValues[i] = subjectArray[i].value;
  }
  const subjectString = subjectArrayValues.join(', ');
  const studentSubjects = document.getElementById('studentSubjects');
  studentSubjects.innerText = `Matérias: ${subjectString}`;
}

function getRating() {
  const ratingArray = document.getElementsByName('rate');
  const studentEval = document.getElementById('studentEval');
  let formEvaluation = 0;
  for (let i = 0; i < ratingArray.length; i += 1) {
    if (ratingArray[i].checked === true) formEvaluation = ratingArray[i].value;
  }
  studentEval.innerText = `Avaliação: ${formEvaluation}`;
}

function getFamily() {
  const family = document.querySelector('input[name="family"]:checked').value;
  const studentFamiliy = document.getElementById('studentFamiliy');
  studentFamiliy.innerText = `Família: ${family}`;
}

function getCommentary() {
  const commentary = document.getElementById('textarea');
  const studentComment = document.getElementById('studentComment');
  studentComment.innerText = `Observações: ${commentary.value}`;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  getFullName();
  getMailAndHome();
  getRating();
  getFamily();
  getSubjectArray();
  getCommentary();
  form.style.display = 'none';
  formData.style.display = 'flex';
});
