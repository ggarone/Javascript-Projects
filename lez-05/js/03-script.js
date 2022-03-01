const username = document.getElementById('username');
const demo = document.getElementById('demo');

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

    demo.innerHTML = `Length of input is ${user.length}`;

}

// username.addEventListener('keyup',changeColor,false);
username.addEventListener('input',changeColor,false);


