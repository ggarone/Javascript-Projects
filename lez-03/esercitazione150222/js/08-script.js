let body = document.getElementsByTagName('body')[0];
let titolo = document.createElement('h1');
titolo.classList.add('display-1','text-center');
titolo.innerHTML = 'POKEDEX';
body.insertBefore(titolo,body.firstElementChild);

let pokemon = ['porygon','rayquaza','charizard','zapdos', 'moltres'];
let pokedex = document.getElementById('pokedex');
let select = document.createElement('select');

select.onchange = function(){
    index = this.selectedIndex;
    getPokemonFromName(pokemon[index]);
}

function getPokemonFromName(name) {
    pokedex.innerHTML = '';
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url).then(c => c.json()).then(poke =>{
        let image = document.createElement('img');
        let ancor = document.createElement('a');
        let br = document.createElement('br');
        image.setAttribute('src', poke.sprites.other.home.front_default);
        image.setAttribute('width',300);
        image.classList.add('rounded', 'float-end');
        ancor.setAttribute('href',`https://wiki.pokemoncentral.it/${name}`);
        ancor.innerHTML = poke.name;
        pokedex.appendChild(image);
        pokedex.appendChild(br);
        pokedex.appendChild(ancor);
        pokedex.classList.add('fontUp');
    });
    
}

function createSelect() {
    select.classList.add('form-select');
    body.insertBefore(select,pokedex);
    pokemon.forEach(pokemon => {
        let option = document.createElement('option');
        option.setAttribute('value',pokemon);
        option.innerHTML = pokemon;
        select.appendChild(option);
    });
}

function getPokemonFromInput() {
    let pokemonName = document.getElementById('poke').value;
    getPokemonFromName(pokemonName);
}

createSelect();
getPokemonFromName(pokemon[0]);