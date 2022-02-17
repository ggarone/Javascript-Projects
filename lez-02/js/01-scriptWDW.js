let i = 1;
var msg = '';

// while(i<10){
//     msg += `${i} * 3 = ${i*3}<br>`;
//     i++;
// }

do{
    msg += `${i} * 3 = ${i*3}<br>`;
    i++;
}while(i<10);

let demo = document.getElementById('demo');
demo.innerHTML = msg;

