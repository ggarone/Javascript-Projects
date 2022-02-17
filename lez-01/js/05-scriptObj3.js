// Notazione con new Object()

let moto = new Object();

// utilizzo la notazione punto per assegnare valore a proprieta
moto.marca = "Kawasaki";
moto.modello = "Z750";
moto.cilindrata = 750;
moto.marcia = 6;
moto.cambiaMarcia = function(marcia){
    this.marcia = marcia;
}

// Notazione con costruttore

function Studente(nome,cognome,matricola,anno){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.anno = anno;

    this.presentati = function(){
        let descrizione = "Lo descrizionedente: " + this.nome + " " + this.cognome;
        descrizione += " e' nato nel " + this.anno;
        descrizione += ". La sua matricola e': " + this.matricola;
        return descrizione;
    }
}

let studenti = [
    new Studente("Fabio","Amoruso",2,1996),
    new Studente("Christian","De La Fuente",3,1999),
    new Studente("Aurora","Esposito",4,1998),
    new Studente("Matteo","Gamba",5,1993),
    new Studente("Giuseppe","Garone",6,1995),
]

for (const s in studenti) {
    console.log(studenti[s].presentati());
}

// let studA = {
//     nome: "Aurora",
//     cognome: "Esposito",
//     anno: 1998,
//     matricola: 4
// }

let studAJSON = '{"nome":"Aurora","cognome": "Esposito","anno": "1998","matricola": "4"}';

console.log(studAJSON);
// console.log(studA);

let studAobj = JSON.parse(studAJSON);
console.log(studAobj.nome);
let studAJSON2 = JSON.stringify(studAobj);
console.log(studAJSON2);