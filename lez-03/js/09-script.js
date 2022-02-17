function aggiungi() {
    let input = document.getElementById('input').value;
    let elLI = document.createElement('li');
    let item = document.createTextNode(input);
    elLI.appendChild(item);

    document.getElementById('demo').appendChild(elLI);
    
    //crea pulsante elimina
    let elElim = document.createElement('span');
    let icon = document.createElement('i');
    icon.setAttribute('class','fa-solid fa-trash');
    elElim.appendChild(icon);

    elElim.onclick = function () {
        //parentNode = ul
        //removeChild = the li (from selected span) is deleted
        elLI.parentNode.removeChild(elLI);
    }

    elLI.appendChild(elElim);

    //reset input
    document.getElementById('input').value = '';


    //inserire tutti gli item in un array di oggetti aggiungendo la data e l'ora
    //creare il pulsante modifica
    //create il pulsante per la trasformazione in formato JSON
    //inviare tutto ad una API


}