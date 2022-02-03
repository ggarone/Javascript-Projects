let result = document.getElementById('result');
let array = [1,2,346,234,54,6,3,3,5,6,4,36,4,34,655665,4,3];

let randomNumber = array[Math.floor(Math.random() * array.length)];
result.innerHTML = randomNumber;