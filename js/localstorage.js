const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const contactFormData = {
  fullName: fullName.value,
  email: email.value,
  message: message.value,
};

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
  }
}

function setInputs() {
  const contactFormData = JSON.parse(localStorage.getItem('contactData'));

  fullName.value = contactFormData.fullName;
  email.value = contactFormData.email;
  message.value = contactFormData.message;
}

function populateStorage() {
  contactFormData.fullName = fullName.value;
  contactFormData.email = email.value;
  contactFormData.message = message.value;

  localStorage.setItem('contactData', JSON.stringify(contactFormData));
  setInputs();
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  if (!localStorage.getItem('contactData')) {
    populateStorage();
  } else {
    setInputs();
  }
}

fullName.addEventListener('keyup', () => {
  populateStorage();
});
email.addEventListener('keyup', () => {
  populateStorage();
});
message.addEventListener('keyup', () => {
  populateStorage();
});
