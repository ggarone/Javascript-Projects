const tempo = document.getElementById('tempo');
const greeting = document.getElementById('greeting');
let number = 0;

function ruota(){
    let foto = document.getElementById('foto');
    number = (number+1) % 5; 
    foto.innerHTML = `<img src="img/duck${number}.jpg" id="image" width="800" height="700"></img>`;
}

let intervalId = window.setInterval(function(){
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    tempo.innerHTML = time;
    
    if(hours >= 7 && hours <= 12)
        greeting.innerHTML = "Buongiorno";
    else if(hours > 12 && hours < 19)
        greeting.innerHTML = "Buon Pomeriggio";
    else if(hours >= 19 && hours <= 24)
        greeting.innerHTML = "Buonasera";
    else{
        greeting.innerHTML = "Buonanotte";
    }
    // add one leading zero
    const zeroPad = (num, places) => String(num).padStart(places, '0');

    // add one leading zero but better
    const betterPad = (num) => {
        if(num < 10)
            // slice(-2) makes a copy of the last 2 elements into an array 
            return ('0' + num).slice(-2);
        else
            return num;
    }

    let currentTime = betterPad(currentDate.getHours()) + ':' + betterPad(currentDate.getMinutes());
    // let currentTime = zeroPad(currentDate.getHours(),2) + ':' + zeroPad(currentDate.getMinutes(),2);
    // let currentTime = (currentDate.getHours()<10)?'0':'' + ':' + (currentDate.getMinutes()<10)?'0':'';
    console.log(currentTime);
    document.getElementById('currentTime').value = currentTime;

  }, 1000);

let interval2 = window.setInterval(function(){
    ruota();
}, 5000);