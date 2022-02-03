let result = document.getElementById('result');

function compute(){
    result.innerHTML = '';
    let word = document.getElementById('word').value;

    word = word.split('').reverse().join('');
    console.log(word);
    result.innerHTML += word;
}