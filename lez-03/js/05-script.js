let primoItem = document.getElementsByTagName('li')[0];

if(primoItem.hasAttribute('class')){
    let attr = primoItem.getAttribute('class'); //recupero il valore di una classe
    let newDiv = document.createElement('div');
    newDiv.innerHTML = "Il nome della classe e'" + attr;
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(newDiv);
}

//set attribute

primoItem.className = "blue";
let terzoItem = document.getElementById('tre');
terzoItem.setAttribute('class','blue');

//remove attribute
let quartoItem = document.getElementById('quat');
if(quartoItem.hasAttribute('class')){
    quartoItem.removeAttribute('class');
}

//aggiungere una classe in piu'
// primoItem.setAttribute('class','fontUp');
primoItem.classList.add('fontUp');
primoItem.classList.remove('blue');