let username = 'root';
let password = 'vecchione';

$('#myForm').submit(function (e) {
    // prevent form submission
    console.log($('#username').val());
    if($('#username').val() == username && $('#password').val() == password){
        console.log('funziona');
        window.location.href = './areaRiservata.html';
    }
    e.preventDefault();
});