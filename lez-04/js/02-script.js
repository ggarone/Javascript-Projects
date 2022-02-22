//Recupero dati da API esterna
//Metodo Fetch
let demo = document.querySelector('#demo');
let dati = [];
const URL_post = 'https://jsonplaceholder.typicode.com/posts';
const URL_photo = 'https://jsonplaceholder.typicode.com/photos';
const URL_person = 'https://randomuser.me/api/';

// fetch(URL_post)
// //fetches json api url and transforms into js object
// .then(data =>{return data.json()})
// //response is already a js object
// .then(response => {

//     for (let i = 0; i < response.length; i++) {
//         dati.push(response[i]);
//         demo.innerHTML += '<li>testo: ' + response[i].body + '</li>';
        
//     }
// })

// // console.log(dati);

// fetch(URL_photo)
// //fetches json api url and transforms into js object
// .then(data => {
//     return data.json()
// })
// //response is already a js object
// .then(response => {
//     for (let i = 0; i < 20; i++) {
//             dati.push(response[i]);
//         demo.innerHTML += '<li><img src=' + response[i].thumbnailUrl + '></li>';
        
//     }
// })

fetch(URL_person)
//fetches json api url and transforms into js object
.then(data => {
    return data.json()
})
//response is already a js object
.then(response => {
    console.log(response);
    demo.innerHTML += '<img src='+response.results[0].picture.large+'>';
})