// let utente = {
//     nome: "Dario",
//     cognome: "Mennillo",
//     token: 1234
// };

// if(Modernizr.localstorage){
//     localStorage.setItem('nomeUser',utente.nome);
//     localStorage.setItem('cognomeUser',utente.cognome);
//     localStorage.setItem('tokenUser',utente.token);
// }

// if(localStorage.getItem('token') == 1234){
//     document.write('Utente Connesso');
// } else {
//     document.write('Utente non Connesso');
// }

let utenti = [
    {
        nome: "Pippo",
        cognome: "Rossi",
        id: 1
    },
    {
        nome: "Anna",
        cognome: "Bianchi",
        id: 2
    },
    {
        nome: "Paola",
        cognome: "Verdi",
        id: 3
    }
];

if(Modernizr.localstorage){
    for (let i = 0; i < utenti.length; i++) {
        localStorage.setItem('utente'+i,JSON.stringify(utenti[i]));
    }
}

setTimeout(() => {
    localStorage.clear()
},10000);