let elSingolo = document.querySelector('#one');
elSingolo.innerHTML = "Mele";

let elSingolo2 = document.querySelector('li.blue');
console.log(elSingolo2);

let elSingolo3 = document.querySelector('li');
console.log(elSingolo3);

let elSingolo4 = document.querySelectorAll('li.red');
console.log(elSingolo4);

if(elSingolo4.length > 0){
    for (let i = 0; i < elSingolo4.length; i++) {
        // elSingolo4[i].className = 'fontUp';
        elSingolo4[i].classList.add('fontUp');
        
    }
}
