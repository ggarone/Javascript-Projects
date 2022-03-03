let mioFile = document.querySelector('#mioFile');

function leggiFile(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = function(){
        let txt = reader.result;
        document.querySelector('#contenuto').innerHTML = txt;
    }
    
}

mioFile.addEventListener('change',leggiFile,false);

//scrive file di testo con blob
document.getElementById('btnSave').onclick = function(){
    if('Blob' in window){
        let fileName = prompt('Inserisci il nome del file', 'SenzaTitolo.txt');
        if(fileName){
            let txtToWrite = document.getElementById('contenuto').value;
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
};

function distruggiElemento(event){
    document.body.removeChild(event.target);
}

//carica immagine
let btnFile = document.querySelector('#btnFile');

function apriFile(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
        let dataURL = reader.result;
        document.getElementById('output').src = dataURL;
    }
    reader.readAsDataURL(input.files[0]);
}

btnFile.addEventListener('change',apriFile,false);

// make image drag&drop
function autorizzaDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('imgDemo');
    event.target.appendChild(document.getElementById(data));
}

function drag(event) {
    event.dataTransfer.setData('imgDemo', event.target.id);
}












