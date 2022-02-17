var annoCorrente = 2022;
var annoNascita = 1995;

var nome = prompt('Inserisci il tuo nome');
document.write(`<h2>Ciao ${nome}</h2>`);
annoNascita = prompt('Inserisci il tuo anno di nascita');
var anni = annoCorrente - annoNascita;
document.write(`<p>Hai ${anni} anni </p>`);

var vMin = 2022;
var vMax = 2100;
var annoMorte = (Math.floor(Math.random()*(vMax - vMin + 1) + vMin));
var anniAllaMorte = annoMorte - annoNascita;
document.write(`<p>Morirai nel ${annoMorte}. Avrai ${anniAllaMorte} anni</p>`);

console.log(typeof annoNascita);
