let torte = [
    {
        id:"Velvet"
    }
]




// funzione per la scadenza dell'offerta
function scadenza(oggi){
    let settDaOggi, day,date,month,year, nomeGiorno, nomeMesi;
    settDaOggi = new Date(oggi.getTime() + (7 * 24 * 60 * 60 * 1000));
    nomeGiorni = ['Domenica','Lunedi', 'Martedi', 'Mercoledi', 'Giovedi','Venerdi','Sabato']
    nomeMesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
    day = nomeGiorni[settDaOggi.getDay()];
    date = settDaOggi.getDay();
    month = nomeMesi[settDaOggi.getMonth()];
    year = settDaOggi.getFullYear();

    let msg = 'Le offerte scadranno il: ';
    msg += `${day} ${date} ${month} ${year}`;
    return msg;
}

let oggi = new Date();
let offertaFine = document.getElementById('offertaFine');
offertaFine.innerHTML = scadenza(oggi);