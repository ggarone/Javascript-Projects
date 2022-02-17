var elemSaluto = document.getElementById('saluto');
console.log(elemSaluto);
var nomeUtente = prompt('Input your name: ');
elemSaluto.innerHTML = `Ciao ${nomeUtente}`;

var elemMovies = document.getElementById('films');
moviesArray = ['Troy', 'Guardians of the galaxy', 'Star Wars'];
moviesArray.forEach(element => {
    elemMovies.innerHTML += '<li>' + element + '</li>';
});

