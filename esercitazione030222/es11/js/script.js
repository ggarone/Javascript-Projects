let result = document.getElementById('result');

let n1 = prompt('Inserisci numero1: ');
let n2 = prompt('Inserisci numero2: ');
n1 = parseInt(n1);
n2 = parseInt(n2);
if(n1>n2){
    alert(`${n1} e' maggiore di ${n2}`);
}
else{
    alert(`${n2} e' maggiore di ${n1}`);
}


console.log(resultString);
result.innerHTML += resultString;
