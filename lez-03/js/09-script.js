let items = [
    {
        name: 'bananas',
        date: '',
        hours: ''
    },
    {
        name: 'oranges',
        date: '',
        hours: ''
    },
    {
        name: 'apples',
        date: '',
        hours: ''
    },
    {
        name: 'blueberries',
        date: '',
        hours: ''
    }
]

function aggiungi(item) {
    let input = '';
    //when item comes from browser input
    if(item == null){
        input = document.getElementById('input').value;
    }
    else{
        input = item.name;
    }
    console.log(input);

    let elLI = document.createElement('li');
    let itemDOM = document.createTextNode(input);
    elLI.appendChild(itemDOM);

    document.getElementById('demo').appendChild(elLI);
    
    

    //crea pulsante modifica
    let elModifica = document.createElement('span');
    let iconModifica = document.createElement('i');
    iconModifica.setAttribute('class','fa-solid fa-bars');
    elModifica.appendChild(iconModifica);

    elModifica.onclick = function () {
        let newItem = prompt('insert new item name: ');
        itemDOM.nodeValue = newItem;
        
    }
    elLI.appendChild(elModifica);

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

    //when item comes from browser input
    if(item == null){
        let itemOBJ = new Object();
        itemOBJ.name = input;
        items.push(itemOBJ);
        addDateAndHourToItem(itemOBJ);
    }
}

function addDateAndHourToItem(itemName) {
    for (let item of items) {
        if(item.name == itemName.name){
            let date = new Date();
            let month = date.getMonth()+1;
            let year = date.getFullYear();
            let hours = date.getHours();
            item.date = month + '/' + year;
            item.hours = hours;
        }
    }    
}

function createJSON() {
    let mioJSON = JSON.stringify(items);
    console.log(mioJSON);
}

for (let item of items) {
    addDateAndHourToItem(item);
    console.log(item);
    aggiungi(item);
}