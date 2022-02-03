let info = document.getElementById('info');
let nome = prompt("Inserisci il tuo nome: ");
let h1 = document.createElement('h1');
h1.textContent = `Ciao ${nome}`;
info.appendChild(h1);