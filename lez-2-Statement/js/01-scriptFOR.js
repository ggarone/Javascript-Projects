let punteggi = [24,36,40,52];
let msg = '';

for (let i = 0; i < punteggi.length; i++) {
    msg += "<li>Livello: " + i + " punteggio " + punteggi[i] + '</li>';
    if(punteggi[i] < 30){
        msg += "Qui potevi impegnarti di piu'";
    }
}

let demo = document.getElementById('demo');
demo.innerHTML = msg;

//FOR OF
for (const iterator of punteggi) {
    console.log(`punteggi: ${iterator}`);
}

//FOR IN
let studente = {
    nome: 'Pippo',
    cognome: 'Ippo',
    indirizzo: 'cia tal dei tali 55',
    zaino: {
        astuccio: ['penna', 'matita','evidenziatore']
    }
}

for(let prop in studente){
    console.log(`${prop}: ${studente[prop]}`);
}

for (prop2 in studente.zaino){
    console.log(`${prop2}: ${studente.zaino[prop2]}`);
}

//FOR EACH
punteggi.forEach(i => {
    console.log(i);
})

let titoli = document.getElementsByTagName('h1'); // html collection
console.log(titoli);
// operatore ... trasforma collection -> array
[...titoli].forEach(i=>{
    console.log(i.innerText);
})

