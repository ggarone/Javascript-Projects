let listaItems = document.getElementById('items');
let btn1 = document.getElementById('btn1');
let items = []; 
let counter = 0;

btn1.onclick = (()=> {
    let item = document.getElementById('listItem').value;
    if(item.length > 0 && items.indexOf(item) == -1){
        populateOutput(item,counter);
        items.push(item);
        counter++;
    }

    document.getElementById('listItem').value = '';
});

// //oppure
// function prova(){
//     console.log("prova");
// }

// btn1.onclick = prova; //se richiamo una funzione con nome NON metto le tonde

// //oppure
// function paramFun(nome){
//     console.log(nome);
// }
// btn1.onclick = function(){
//     paramFun("Dario");
// }

function deleteItem(itemName){
    const index = items.indexOf(itemName.parentNode.id);
    items.splice(index,1);
    refreshItems();
}

function refreshItems(){
    listaItems.innerHTML = '';
    counter = 0;
    let item = document.getElementById('listItem').value;
    for (const item of items) {
        populateOutput(item,counter);
    }
}

function populateOutput(item,counter){
    listaItems.innerHTML += `<li id="item${counter}">`;
    listaItems.innerHTML += `<input type="checkbox" name="" id="item${counter}"></input>`;
    listaItems.innerHTML += `${item}`;
    listaItems.innerHTML += `<button class="deleteButton" id="btn2" onclick="deleteItem(this)">Delete</button></li>`;
    counter++;
}









