const DEMO = document.querySelector('#demo');


//Recupero il file di testo
let xmlhttp = new XMLHttpRequest(); //oggetto che elabora la risposta del server
const URL = './assets/studente.txt';

xmlhttp.open("GET",URL,true);
xmlhttp.send();
//server response -> readystate == 4 && status==200
xmlhttp.onreadystatechange = function () {
    if(this.status == 200 && this.readyState == 4){
        let response = JSON.parse(this.responseText);
        DEMO.innerHTML += response[0].nome + '<br>';
        DEMO.innerHTML += response[1].nome + '<br>';

        for (const compagni of response[0].compagniClasse) {
            DEMO.innerHTML += compagni + '<br>'
        }
        console.log(response);
    } else {
        console.log("Connessione non riuscita " + this.status);
    }
}

//recuperiamo la struttura HTML
let xmlhttp2 = new XMLHttpRequest();
const URL2 = './assets/struttura.html';

xmlhttp2.open("GET",URL2,true);
xmlhttp2.send();

xmlhttp2.onreadystatechange = function () {
    if(this.status == 200 && this.readyState == 4){
        console.log(this.responseText);
        DEMO.innerHTML += this.responseText;
    } else {
        console.log("Connessione non riuscita " + this.status);
    }
}
