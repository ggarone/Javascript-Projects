let foto = document.getElementById('foto');
let time = document.getElementById('time');
let infoTime = document.getElementById('infoTime');
let immagini = [
    'img/duck0.jpg',
    'img/duck1.jpg',
    'img/duck2.jpg',
    'img/duck3.jpg',
    'img/duck4.jpg',
]

let contatore = 0;
let tagImg = "<img id='imgMarch' width=500px heigth=350px src='" + immagini[contatore] + "'/>";

foto.innerHTML = tagImg;

setInterval(() => {
    ruotaFoto();
}, 2000);

function ruotaFoto(){
    contatore++;
    document.getElementById('imgMarch').src = immagini[contatore%immagini.length];
}

setInterval(() => {
    let oraEsatta = new Date();
    console.log(oraEsatta);
    let ora = oraEsatta.getHours()<10?'0':'' + oraEsatta.getHours();
    let min = oraEsatta.getMinutes()<10?'0':'' + oraEsatta.getMinutes();
    let sec = oraEsatta.getSeconds()<10?'0':'' + oraEsatta.getSeconds();

    time.innerHTML = ora + ":" + min + ":" + sec;

    infoTime.value = ora + ":" + min;

}, 1000);
