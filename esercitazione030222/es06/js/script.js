let result = document.getElementById('result');
let userString = prompt("Scegli una stringa: ");
let resultString = '';
if(userString.toLocaleLowerCase().substring(0,2) != 'ja')
    resultString = 'Ja'+userString;
else
    resultString = userString;
result.innerHTML = resultString;
