function multiplication(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let res = n1 * n2;
    
    result.innerHTML += `Result: ${n1} * ${n2} = ${res}`;
}

function division(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let res = n1 / n2;
    
    result.innerHTML += `Result: ${n1} / ${n2} = ${res}`;
}