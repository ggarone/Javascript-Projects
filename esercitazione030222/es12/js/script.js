let result = document.getElementById('result');

function compute(){
    result.innerHTML = '';
    let word = document.getElementById('word').value;
    let myString = ''
    word = [...word];

    for (let i = word.length-1; i>=0; i--) {
        myString += word[i];
        console.log(word[i]);
    }
    console.log(myString);
    result.innerHTML += myString;
}