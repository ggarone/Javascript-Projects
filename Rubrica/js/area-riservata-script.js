$('#btnFile').change(function (event) { 
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function () {
        let dataURL = reader.result;
        document.getElementById('userImage').src = dataURL;
    }
    reader.readAsDataURL(input.files[0]);
});

$('#myForm').submit(function (e) {
    e.preventDefault();
    console.log($('#userImage').attr('src'));
    $.ajax({
        type: "post",
        url: "http://localhost:3000/utenti",
        dataType: "json",
        data: {
            id : 1,
            nome : $('#nome').val(),
            email : $('#email').val(),
            telefono : $('#tel').val(),
            citta : $('#citta').val(),
            image_src : $('#userImage').attr('src')
        },
        success: function (response) {
            console.log(response);
        }
    });
});