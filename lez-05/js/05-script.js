let messaggio = document.querySelector('#messaggio');
let liveTweet = document.querySelector('#caratteriRes');
let btn = document.querySelector('#btn');
let feed = document.querySelector('#feed');
let show = document.querySelector('.show');
show.style.display='none';

function writeToLiveDiv() {
    let liveText = document.querySelector('#messaggio').value;
    show.style.display = 'none';

    if(liveText.length > 280){
        document.querySelector('#messaggio').value = liveText.substring(0, 280);
        return;
    }

    // console.log(liveText);
    liveTweet.innerHTML = 280 - Number(liveText.length);
    
}

function writeTweetToDiv() {
    let finalTweet = document.querySelector('#messaggio').value;
    console.log(finalTweet);
    show.innerHTML = finalTweet;

    if('Blob' in window){
        let fileName = prompt('Inserisci il nome del file', 'SenzaTitolo.txt');
        if(fileName){
            let txtToWrite = finalTweet;
            let txtFileAsBlob = new Blob([txtToWrite], {type: 'text/plain'});
            if('msSaveOrOpenBlob' in navigator){
                navigator.msSaveOrOpenBlob(txtFileAsBlob, fileName);
            } else {
                let downloadLink = document.createElement('a');
                downloadLink.download = fileName;
                downloadLink.innerHTML = 'Scarica File';
                if('webkitURL' in window){
                    downloadLink.href = window.webkitURL.createObjectURL(txtFileAsBlob);
                } else {
                    downloadLink.href = window.URL.createObjectURL(txtFileAsBlob);
                    downloadLink.onclick = distruggiElemento;
                    downloadLink.style.display = 'none';
                    document.body.appendChild(downloadLink);
                }
                downloadLink.click();
            }
        }
    } else {
        alert("Il tuo browser non supporta il formato blob");
    }
}

messaggio.addEventListener('input',writeToLiveDiv,false);
btn.addEventListener('click',writeTweetToDiv,false);