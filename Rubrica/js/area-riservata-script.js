var persone = [];

$('#image_url').bind('input', function () {
    $("#userImage").attr('src', $(this).val())
});

$('#myForm').submit(function (e) {
    e.preventDefault();
    console.log($('#userImage').attr('src'));
    $.ajax({
        type: "post",
        url: "http://localhost:3000/utenti",
        dataType: "json",
        data: {
            nome: $('#nome').val(),
            email: $('#email').val(),
            telefono: $('#tel').val(),
            citta: $('#citta').val(),
            image_src: $('#image_url').val()
        },
        success: function (response) {
            console.log(response);
        }
    });
});

$(function () {
    $.ajax({
        type: "get",
        url: "http://localhost:3000/utenti",
        dataType: "json",
        success: function (response) {
            persone = response;
            console.log(response);

            response.forEach(element => {
                var card = `
                <div class="card" style="width: 18rem;">
                <img src="${element.image_src}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.nome}</h5>
                <p class="card-text">
                email: ${element.email}<br>
                telefono: ${element.telefono}<br>
                citta: ${element.citta}<br>
                </p>
                <button class="btn btn-danger" id="${element.id}">Delete</button>
                </div>
                </div>
                `;
                $('#cards').append(card);

                let btnid = `${element.id}`;
                $('#'+btnid).click(function (e) { 
                    e.preventDefault();
                    console.log("http://localhost:3000/utenti/" + element.id);
                    $.ajax({
                        type: "delete",
                        url: "http://localhost:3000/utenti/" + element.id,
                        dataType: "json",
                        success: function (response) {
                        }
                    });
                });
            });
        }
    });
});


