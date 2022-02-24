let username = document.querySelector("#username");
let feedback = document.querySelector("#feedback");

function suggerisci() {
    feedback.innerHTML = 'Ti conviene utilizzare uno Username di almeno 5 caratteri';
    feedback.className = 'warning';
}

function controllaUser() {
    let user = username.value;
    if(user.length <= 5){
        feedback.innerHTML = 'Non puoi usare uno username cosi corto'
        feedback.className = 'danger';
    } else {
        feedback.innerHTML = '';
    }
}

//suggerisci will start when user focuses on input username
username.addEventListener('focus',suggerisci,false);
//controllaUser will start when user goes out from input
username.addEventListener('blur',controllaUser,false);