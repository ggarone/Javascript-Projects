//creao elemento
let nuovoEl = document.createElement('li');
//creo nodo di testo
let nuovoTxt = document.createTextNode('Compliare CV');
nuovoEl.appendChild(nuovoTxt);
console.log(nuovoEl);
//seleziono il genitore del nuovo li
let parentUL = document.getElementsByTagName('ul')[0];
parentUL.appendChild(nuovoEl);
//elimino un elemento
let elDaRimuovere = document.getElementsByTagName('li')[1];
let contenitoreElem = document.getElementsByClassName('ul')[0];
contenitoreElem.removeChild(elDaRimuovere);
//update elemento

let newNode = document.createTextNode('Fare la spesa');
let elDaUpdate = document.getElementsByTagName('li')[2];
contenitoreElem.replaceChild(newNode);