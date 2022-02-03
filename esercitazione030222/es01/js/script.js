let result = document.getElementById('result');
let lato1 = 5;
let lato2 = 6;
let lato3 = 7;

// p = (a+b+c)/2

let perimetroErone = (lato1+lato2+lato3)/2;
let areaErone = Math.sqrt(perimetroErone*(perimetroErone-lato1)*(perimetroErone-lato2)*(perimetroErone-lato3));
result.innerHTML += `a=${lato1} b=${lato2} c=${lato3}<br>`
result.innerHTML += `Il perimetro e' ${perimetroErone}<br>L'area e' ${areaErone.toFixed(2)}`;
