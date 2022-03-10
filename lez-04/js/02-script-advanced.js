//fetch
const url = 'https://reqres.in/api/users?page=1';
let lista = document.querySelector('#lista');
let dati = [];
let output = document.querySelector('#output');

fetch(url)
.then(data => {return data.json()})
.then(response => {
    dati.push(response);
    trasofrmaInJSON(response.data);
})

function trasofrmaInJSON(dati) {
    console.log(dati);
    dati.forEach(element => {
        let li = document.createElement('li');
        // let txtNode = document.createTextNode(element.first_name + ' ' + element.last_name);
        let accordionString = 
        `
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${element.id}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${element.id}" aria-expanded="true" aria-controls="collapseOne">
                ${element.first_name + ' ' + element.last_name}
            </button>
          </h2>
          <div id="collapse${element.id}" class="accordion-collapse collapse show" aria-labelledby="heading${element.id}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>${element.email + '<img src='+element.avatar+'>'}</strong>
            </div>
          </div>
        </div>
        </div>
        `
        li.innerHTML = accordionString;
        lista.appendChild(li);
        console.log(element);

        
    });
}
