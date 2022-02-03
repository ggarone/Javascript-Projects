let result = document.getElementById('result');

function compute(){
    result.innerHTML = '';
    let phrase = document.getElementById('word').value;
    let resultString = ''

    phrase.split(' ').forEach(element => {
        resultString += element.substring(0,1).toUpperCase() + element.substring(1,element.length) + ' ';
        console.log(resultString);

    });

    console.log(phrase);
    result.innerHTML += resultString;
}