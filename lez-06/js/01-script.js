'use strict'

//SELETTORI
$('#titolo').addClass('rosso');

$(':header').addClass('rosso');

// select first two elements
// $('li:lt(2)').addClass('barrato');

// $('li:odd').addClass('barrato');

// $('li').hide().fadeIn(2500);

$('li').on('click', function () {
    // $(this).remove();
    $(this).fadeOut(2500);
    // wait(2500);
    // $(this).remove();
});

$('ul li').on('click', function () {
    $(this).removeClass('rosso');
});

// ready function
// $(document).ready(function () {
//     $('button').click(function () { 
//         $('ul').hide().delay(1500).fadeIn(1400).toggleClass('barrato');
//     });
// });

$(function() {
    //ready function abbreviata
    // let $listaHtml = $('ol').html();
    // console.log($listaHtml);
    // $('#demo').append($listaHtml);

    // let $listaLi = $('li').html(); //.html prende la prima occorrenza
    // console.log($listaHtml);
    // $('li').append('nuovo li: ' + $listaLi); //qui prendo tutti gli li
    // $('li:contains("Angular")').text('Angular 12, no-JS');
    // $('ul').before('<p class="rosso">Appena aggiornati</p>');
    // $('ul li:last').after('<li>Ruby</li>');
    // $('ul li:last').attr('id','sei').addClass('rosso');
    // $('li').css({
    //     'background-color':'black',
    //     'padding-left': '4rem'
    // })

    $('li').each(function(){
        let $idSelezionati = this.id;
        $(this).append('<span class="rosso"> ' + $idSelezionati);
    });

});





