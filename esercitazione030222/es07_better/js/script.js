let result = document.getElementById('result');

function compute(){
    result.innerHTML = '';
    let n1 = document.getElementById('n1').value;

    if(n1 >= 20 && n1 <= 100)
        result.innerHTML = `20<${n1}<100`;
    else if(n1 >= 20 && n1 <= 400)
        result.innerHTML = `20<${n1}<400`;
    else
        result.innerHTML = `${n1} non compreso tra 20<${n1}<100 ne 20<${n1}<400`;
}