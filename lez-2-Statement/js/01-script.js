//punti per livello
let punti1 = 8;
let punti2 = 5;
//soglia per passare livello
let exit1 = 6;
let exit2 = 7;

let condizioneAnd = (punti1 >= exit1 && punti2 >= exit2);
let condizioneOr = (punti1 >= exit1 || punti2 >= exit2);
if(condizioneOr){
    console.log("Bravo hai terminato il gioco");
} else {
    console.log("Non hai terminato il gioco");
}

console.log(condizione);


let parola = prompt("inserisci la parola d'ordine");
if(parola == 'ciao'){
    console.log('Hai effettuato l\'accesso');
} else {
    console.log('Credenziali non valide');
}

if(parola === 1234){
    console.log("Hai effettuato l'accesso");
} else {
    console.log("Credenziali non valide");
}

let punteggio = 40;
let skill = 35;
let msg = '';

if(punteggio >= 50 && skill >= 40){
    msg = 'Bravo, hai superato il livello';
} else if (punteggio >= 50 && skill < 40){
    msg = 'Devi migliorare le skill per superare il livello';
} else if(punteggio < 50 && skill >= 40){
    msg= 'Devi migliorare il tuo punteggio per superare il livello';
}else {
    msg = 'Mi dispiace, datti all\'ippica';
}
console.log(msg);

//switch
let msg;
let livello = 1;

switch(livello){
    case 1:
        msg = 'Buona fortuna per il primo livello';
        break;
    case 2:
        msg = 'Ci sei riuscito, adesso ti tocca il secondo livello';
        break;
    case 3:
        msg = 'Bravo, adesso ci sara\' da sconfiggere il mostro';
        break;
    default:
        msg = 'Benvenuto nel gioco!';
        break;
}

//operatore ternario
let pioggia = true;
let grandine = true;

let decision = pioggia == true ? 'Prendi l\'ombrello' : 'Puoi uscire senza ombrello';
let decision = grandine == true ? 'Prendi l\'ombrello' : 'Puoi uscire senza ombrello';
console.log(decision);

