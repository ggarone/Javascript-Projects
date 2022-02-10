// by ID
let uno = document.getElementById('uno');
console.log(typeof uno);
uno.className = 'red';
uno.textContent = 'Ciao come stai';

// tag name
let elsLI = document.getElementsByTagName('li');
console.log(elsLI);

for (let i = 0; i < elsLI.length; i++) {
    elsLI[i].className = 'blue';
    
}

//get elements by class name (sconsigliato)
let elsLI2 = document.getElementsByClassName('blue');
console.log(elsLI);

for (let i = 0; i < elsLI2.length; i++) {
    elsLI2[i].className = 'red';
    
}