$(function(){
    $('#btn1').on('click',function(){
        $(':header').empty();
    });

    $('#btn2').click(function(){
        $('span.c2').css({'color':'blue'});
    });

    $('#btn3').mouseenter(function () { 
        $('div:first').text('Jquery ONLINE');
    });

    $('#btn3').mouseleave(function () { 
        $('div:first').text('Lorem Ipsum');
    });

    let pixel = 0;
    $('#demo').mousemove(function () { 
        $('#demo').text('stai percorrendo ' + pixel++ + ' pixel');
        
    });
});