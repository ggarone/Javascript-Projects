let String = "Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java";
let parola = prompt('Seleziona parola: ');
if(String.includes(parola)){
    console.log(parola);
} else {
    console.log(`${parola} non trovata`);
}