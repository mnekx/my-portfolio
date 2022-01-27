const contactSubmitBtn = document.querySelector('#contact-submit-btn');
let contactEmail = document.querySelector('#email');
const errorMessageSpan = document.querySelector('#contact-email-error');
let contactForm = document.querySelector('#contact-form');
let contactFullName = document.querySelector('#full-name');
let contactMessage = document.querySelector('#message');

function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function setInputs() {
  let storedContactName = localStorage.getItem('contactName');
  let storedContactEmail = localStorage.getItem('contactEmail');
  let storedContacMessage = localStorage.getItem('contactMessage');

  contactFullName.value = storedContactName;
  contactEmail.value = storedContactEmail;
  contactMessage.value = storedContacMessage;
}

function populateStorage() {
  localStorage.setItem('contactName', contactFullName.value);
  localStorage.setItem('contactEmail', contactEmail.value);
  localStorage.setItem('contactMessage', contactMessage.value);

  console.log(localStorage);

  setInputs();
}



function valid(email) {
  const lowerCasedEmail = email.toLowerCase();
  return email === lowerCasedEmail;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(valid(contactEmail.value));
  if (!valid(contactEmail.value)) {
    errorMessageSpan.classList.add('show-icon'); // The class adds display: inline-block
    e.preventDefault();
  } else {
    errorMessageSpan.classList.remove('show-icon');
    if (contactFullName.value !== '' && contactMessage !== '') {
      populateStorage();
      contactForm.submit();
    }
  }
});

contactSubmitBtn.addEventListener('click', (event) => {
  if (!valid(contactEmail.value)) {
    errorMessageSpan.classList.add('show-icon'); // The class adds display: inline-block
    event.preventDefault();
  } else {
    errorMessageSpan.classList.remove('show-icon');
    if (contactFullName.value !== '' && contactMessage !== '') {
      contactForm.submit();
    }
  }
});


// Local storage
if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  if(!localStorage.getItem('contactEmail')) {
      populateStorage();
    } else {
      setInputs();
    }
    
}
else {
  // Too bad, no localStorage for us
  console.log('No local storage available.');
}