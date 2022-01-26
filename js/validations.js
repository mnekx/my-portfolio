const contactSubmitBtn = document.querySelector("#contact-submit-btn");
const contactEmail = document.querySelector("#email");
let errorMessageSpan = document.querySelector('#contact-email-error');
let contactForm = document.querySelector("#contact-form");
let contactFullName = document.querySelector("#full-name");
let contactMessage = document.querySelector("#message");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(valid(contactEmail.value));
    if (!valid(contactEmail.value)) {
       
        errorMessageSpan.classList.add('show-icon'); // The class adds display: inline-block
        e.preventDefault();
    } else {
        errorMessageSpan.classList.remove('show-icon');
        errorMessageSpan.classList.remove('show-icon');
        if(contactFullName.value !=='' && contactMessage !== '') {
            contactForm.submit();
        }
    }
})

contactSubmitBtn.addEventListener('click',(event)=>{
    if (!valid(contactEmail.value)) {
       
        errorMessageSpan.classList.add('show-icon'); // The class adds display: inline-block
        event.preventDefault();
    } else {
        errorMessageSpan.classList.remove('show-icon');
        if(contactFullName.value !=='' && contactMessage !== '') {
            contactForm.submit();
        }
    }
});
