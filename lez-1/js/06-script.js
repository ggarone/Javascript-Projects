//obj per il pulsante prendi
let info = document.getElementById('info');
let demo = document.getElementById('demo');

function prendi(){
    let obj = new Object();
    obj.nome = document.getElementById('nome').value;
    obj.cognome = document.getElementById('cognome').value;
    info.innerHTML = obj.nome + " " + obj.cognome;
    console.log(obj);
}

//obj per il pulsante costruisci utilizzando un costruttore
function Utente(nome,cognome){
    this.nome = nome;
    this.cognome = cognome;

    this.toString = function(){
        return `Mi chiamo: ${this.nome} ${this.cognome}`;
    }
}

function costruisci(){
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let utente = new Utente(nome,cognome);
    demo.innerHTML = utente.toString();
    //trasformo il mio utente in JSON
    let utenteSTR = JSON.stringify(utente);
    // send(utenteSTR);
    console.log(utenteSTR);
}