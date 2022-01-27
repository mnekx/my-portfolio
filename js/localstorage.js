let fullName = document.querySelector('#full-name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

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
    let contactName = localStorage.getItem('contactName');
    let contactEmail = localStorage.getItem('contactEmail');
    let contactMessage = localStorage.getItem('contactMessage');
  
    fullName.value = contactName;
    email.value = contactEmail;
    message.value = contactMessage;
  }

  function populateStorage() {
    localStorage.setItem('contactName', fullName.value);
    localStorage.setItem('contactEmail', email.value);
    localStorage.setItem('contactMessage', message.value);

    console.log(localStorage);
  
    setInputs();
  }

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
  