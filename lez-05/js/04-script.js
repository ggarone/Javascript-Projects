let elForm = document.getElementById('mioForm');
let elUser = document.getElementById('username');
let elMail = document.getElementById('email');
const feedMail = document.getElementById('feedMail');
const feedUser = document.getElementById('feedUser');

function validate(event) {
    feedMail.innerHTML = '';
    feedUser.innerHTML = '';

    if(elUser.value == ''){
        feedUser.innerHTML = 'Hai dimenticato il nome';
        event.preventDefault();
    }

    if(elMail.value == ''){
        feedMail.innerHTML = 'Hai dimenticato la mail';
        event.preventDefault();
    }
}

elForm.addEventListener('submit',validate, false);