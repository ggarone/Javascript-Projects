//fetch
const url = 'https://reqres.in/api/users?page=1';
let lista = document.querySelector('#lista');
let dati = [];
let output = document.querySelector('#output');

fetch(url)
.then(data => {return data.json()})
.then(response => {
    dati.push(response);
    // console.log(response);
    trasofrmaInJSON(response.data);
    showData();
})

function trasofrmaInJSON(dati) {
    // console.log(dati);
    dati.forEach(element => {
        // document.write(element.first_name + ' ' + element.last_name + '<br>');

        let li = document.createElement('li');
        let txtNode = document.createTextNode(element.id + ' ' + element.first_name + ' ' + element.last_name);
        li.appendChild(txtNode);
        lista.appendChild(li);
        
    });
}

function showData() {
    output.innerHTML = '';
    let LIs = document.querySelectorAll('li');
    // console.log(LIs);
    LIs.forEach(element => {
        let icon = document.createElement('span');
        let X = document.createTextNode(' [x] ');
        icon.appendChild(X);
        element.appendChild(icon);
    
        icon.onclick = function () {
            output.innerHTML = '';
            id = Number(element.textContent.split(" ")[0]) - 1;
            data = dati[0].data[id]
            output.innerHTML += data.email + '<br>';
            output.innerHTML += '<img src='+data.avatar+'>';
        }
        
    });
}
