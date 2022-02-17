let numIniziale = 12.4554363;

// il numero di cifre da tenere dopo la virgola
let numToFix = numIniziale.toFixed(3);
// il numero di cifre significative
let numToPre = numIniziale.toPrecision(3);

console.log(numIniziale);
console.log(numToFix);
console.log(numToPre);

//oggetto number
let x1 = "132";
let x2 = true;
let x3 = false;
let x4 = new Date();
let x5 = "123 456"

console.log(Number(x1));
console.log(Number(x2));
console.log(Number(x3));
console.log(Number(x4));
console.log(Number(x5));

let n1 = parseInt("34");
let n2 = parseInt("22.33");
let n3 = parseInt(" 33  ");
let n4 = parseInt("20Ciao");
var n5 = parseInt("Ciao20");

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);

let n7 = parseInt("1011111101", 2);
console.log(n7);

let n8 = parseFloat("13.45");
let n9 = parseFloat(45);

console.log(n8);
console.log(n9);

///////////////////isNaN
let nan = 'ciao'
let num = 44;
console.log(isNaN(nan));
console.log(isNaN(num));

// funzione eval (not adviced)
let p1 = 4;
let p2 = 5;
let e1 = eval('p1 * p2');
let e2 = eval('p1 + p2');
console.log(e1);
console.log(e2);


