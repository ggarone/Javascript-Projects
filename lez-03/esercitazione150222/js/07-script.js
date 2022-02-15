let body = document.getElementsByTagName('body')[0];
let titolo = document.createElement('h1');
titolo.innerHTML = 'LISTA POKEMON';
body.insertBefore(titolo,body.firstElementChild);


let UL = document.getElementsByTagName('ul')[0];
let LIs = document.querySelectorAll('li');
let pokemon = ['porygon','rayquaza','charizard','zapdos', 'moltres'];

[...LIs].forEach((element,index) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon[index]}`;
    let name = '';
    let image = '';
    fetch(url).then(c => c.json()).then(poke =>{
        // console.log(poke.name);
        // console.log(poke.sprites.other.home.front_default);
        let image = document.getElementById(`img${index+1}`);
        image.setAttribute('src', poke.sprites.other.home.front_default);
        image.setAttribute('width',300);
        // element.innerHTML = poke.name;
        let ancor = document.createElement('a');
        ancor.setAttribute('href',`https://wiki.pokemoncentral.it/${pokemon[index]}`);
        ancor.innerHTML = poke.name;
        element.appendChild(ancor);
        element.appendChild(image);
        UL.appendChild(element);
        element.classList.add('fontUp');
        // <ul>
        // <li><img scr="`link img"><a></a><li>
    });
});