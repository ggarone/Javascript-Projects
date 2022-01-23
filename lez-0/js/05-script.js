var items = ['Pane', 'Olio', 'Carne', 'Birra', 'Pasta'];
var prezzi = [1.50, 7.50, 11.20, 5.30, 0.80];

var lista = document.getElementById('lista');
var listaSpesa = '';
var totalPrezzi = 0;

for (let i = 0; i < items.length; i++) {
    listaSpesa += '<li>' + items[i] + ' - ' + prezzi[i] + '€</li>';
    totalPrezzi += prezzi[i];
}

lista.innerHTML = listaSpesa;
totale = document.getElementById('totale');
totale.innerHTML =  ('<h2>prezzo totale: ' + totalPrezzi + '</h2>');

