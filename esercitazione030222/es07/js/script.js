let result = document.getElementById('result');

function compute(){
    result.innerHTML = '';
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let hundred = 100;
    if(Math.abs(n1-hundred) < Math.abs(n2-hundred)){
        result.innerHTML += `${n1} is closer than ${n2} to ${hundred}`;
    } else {
        result.innerHTML += `${n2} is closer than ${n1} to ${hundred}`;
    }
}