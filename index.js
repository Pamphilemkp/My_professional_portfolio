const NavigationMenu = document.querySelector('.mobile-img');
const hamburgeurMenu = document.querySelector('#header-menu');
const headerMenu = document.querySelector('.remove');

document.querySelectorAll('.link').forEach((a) => a.addEventListener('click', () => {
  hamburgeurMenu.classList.remove('hamburgeur');
}));

function menubar() {
  hamburgeurMenu.classList.toggle('hamburgeur');
}

NavigationMenu.addEventListener('click', menubar);
headerMenu.addEventListener('click', menubar);

// form validation

const form = document.querySelector('form');
const clientName = document.getElementById('name');// get the name
const email = document.getElementById('email');// get the email
const messageType = document.querySelector('.errorMessage');// get the message
const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const comment = document.getElementById('comment');
let counter = 0;
const ParagraphError = document.querySelector('.Paragraph-errors');

// for setting errors for name
const setError = (element, message) => {
  messageType.textContent = message;
  clientName.classList.add('error');
  clientName.classList.remove('success');
  ParagraphError.style.display = 'block';
};

// for setting errors for email
const setErrorEmail = (element, message) => {
  messageType.textContent = message;
  email.classList.add('error');
  email.classList.remove('success');
  ParagraphError.style.display = 'block';
};
// for setting errors for comment
const setErrorComment = (element, message) => {
  messageType.textContent = message;
  comment.classList.add('error');
  comment.classList.remove('success');
  ParagraphError.style.display = 'block';
};

// HERE I STARTED
// HERE I STARTED
// HERE I STARTED

// for setting the the success message
const setSuccess = () => {
  messageType.textContent = '';
  clientName.classList.add('success');
  clientName.classList.remove('error');
  email.classList.add('success');
  email.classList.remove('error');
  ParagraphError.style.display = 'block';
};

const validateInputs = () => {
  const usernameValue = clientName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = comment.value.trim();

  // name validation
  if (usernameValue === '') {
    setError(clientName, 'Username is required');
    return;
  } if (usernameValue.length > 30) {
    setError(clientName, 'Username should not exceed 30 characters or be less than 3');
    return;
  }
  if (usernameValue.length < 3) {
    setError(clientName, 'Username should not be less than 3');
    return;
  }
  setSuccess(clientName);
  counter += 1;

  // email validation
  if (emailValue === '') {
    setErrorEmail(email, 'Email is required');
    return;
  }
  if (emailValue !== emailValue.toLowerCase()) {
    setErrorEmail(email, 'Email should be in lowercase');
    return;
  }

  if (!emailRegex.test(emailValue)) {
    setErrorEmail(email, 'Please enter a valide email adress');
    return;
  }

  setSuccess(email);
  counter += 1;

  // comment validation
  if (messageValue === '') {
    setErrorComment(Comment, 'Please add a message');
  } else if (messageValue.split('').length > 500) {
    setErrorComment(Comment, 'Message should be short and do not exceed 500 characters');
  } else {
    setSuccess(Comment);
    counter += 1;
  }
};

// Storing data Client side local storage

let username = clientName.value;
let userEmail = email.value;
// eslint-disable-next-line no-unused-vars
let userMessage = messageType.value;

form.addEventListener('submit', (e) => {
  // prevent sumitting

  validateInputs();// tocheck the form for validation

  // making decisions
  if (counter === 3) {
    messageType.classList.replace('errorMessage', 'submitted');
    messageType.textContent = 'Submitted';
    ParagraphError.style.display = 'block';

    // prehold inputs with user values

    localStorage.setItem('name', username);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userMessage', username);

    const keyname = localStorage.getItem('name');
    const keyMail = localStorage.getItem('userEmail');
    const keyMessage = localStorage.getItem('userMessage');

    username = keyname;
    userEmail = keyMail;
    userMessage = keyMessage;
  } else {
    counter = 0;
    e.preventDefault();
  }
});
