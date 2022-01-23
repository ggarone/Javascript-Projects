// Creare una pagina di resoconto per acquisti online.
// Riepilogo oggetti acquistati, prezzo per ogni voce, totale senza iva, totale con iva, prezzo spedizione
// Grand Totale(totale con iva + spedizione).
// Quando accedo alla pagina viene richiesto il nome utente e stampato un saluto "ciao, utente"

const items = new Map([
    ["apples", 5],
    ["bananas", 3],
    ["oranges", 2]
  ]);

let prezzoSpedizione = 15;
let iva = 1.22;
let totale = 0;
let totaleIvato = 0;
let grandTotale = 0;

let benvenuto = document.getElementById('benvenuto');
let listaOgg = document.getElementById('listaOgg');
let resOgg = document.getElementById('resOgg');
let totaleById = document.getElementById('totale');
let totaleIvatoById = document.getElementById('totaleIvato');
let spedizione = document.getElementById('spedizione');
let grandTotal = document.getElementById('grandTotal');



let nomeUtente = prompt('Input your name: ');
benvenuto.innerHTML = '<h1>Ciao, '+ nomeUtente +'</h1>';

// listaOgg.innerHTML(items);
listaOgg.innerHTML = `<h2>Items:</h2><br>`
items.forEach((keys,value) => {
    listaOgg.innerHTML += '<li>' + value + ' ' + keys + '</li>';
    console.log(keys + ' ' + value);
    totale += keys;
});

totaleById.innerHTML = `<h2>Totale: ${totale}</h2>`
totaleIvato = totale * iva;
totaleIvatoById.innerHTML = `<h2>Totale Ivato: ${totaleIvato}</h2>`
spedizione.innerHTML = `<h2>Prezzo Spedizione: ${prezzoSpedizione}</h2>`
grandTotale = totaleIvato + prezzoSpedizione;
grandTotal.innerHTML = `<h2>Grand Totale: ${grandTotale}</h2>`