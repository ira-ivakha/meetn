$(document).ready(function(){
    $('.num-button').click(function(){
        var calc=$(".display").attr("value")+'1';
        console.log(calc);
        $('display').attr('value', '1');
    });
});