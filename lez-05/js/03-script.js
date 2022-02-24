const username = document.getElementById('username');

function changeColor() {
    let user = username.value;
    console.log(user.length);
    if(user.length < 5){
        username.classList.remove('primary');
        username.classList.add('danger');
    } else {
        username.classList.remove('danger');
        username.classList.add('primary');
    }
}

username.addEventListener('keyup',changeColor,false);