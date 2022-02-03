let result = document.getElementById('result');

function compute(){
    
    result.innerHTML = '';
    let randomStringLength = document.getElementById('number').value;
    let resultString = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < randomStringLength; i++ ) {
        resultString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(resultString);
    result.innerHTML += resultString;
}