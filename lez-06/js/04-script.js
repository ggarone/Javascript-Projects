$(function () {
    $('#btn').click(function() {
        let $item = $('#item').val();
        $('#item').val(''); //reset input
        $('#demo').append(`<li>${$item} <span>X</span></li>`);
        $('li').click(function () { 
            $(this).toggleClass('barrato');
        });
        $('span').click(function () { 
            $(this).parent().remove();
        });
    })
})