let btn = document.querySelector('#btn');
let lista = document.querySelector('#lista');
let inputItem = document.querySelector('#item');
let feedback = document.querySelector('#feedback');

// function inserisci() {
//     let item = inputItem.value;

//     inputItem.value = '';
//     lista.innerHTML += '<li>' + item + '</li>';

//     let elLi = document.querySelectorAll('li'); //nodeList

//     for (let i = 0; i < elLi.length; i++) {
//         elLi[i].onclick = function name(event) {
//             event.target.setAttribute('class','danger');
//         }
        
//     }
// }

lista.addEventListener('click',function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('barrato');
    }
}, false);


function inserisci() {
    let li = document.createElement('li');
    let item = inputItem.value;
    let txtNode = document.createTextNode(item);
    li.appendChild(txtNode); //<li> andare al mare
    
    lista.appendChild(li);

    let icon = document.createElement('span');
    let X = document.createTextNode(' [x] ');
    icon.appendChild(X);
    li.appendChild(icon);

    icon.onclick = function () {
        this.parentElement.remove();
    }
    
}

btn.addEventListener('click',inserisci, false);