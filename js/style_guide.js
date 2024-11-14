$(document).ready(function(){
//$('.sg-depth2').hide();

/*$('.sg-gnb > li').click(function(e){
    e.preventDefault();
    $(this).children('.sg-depth2').stop().slideToggle();
    $(this).addClass("active");
});
*/

$('.mm-ppi-add-kr-modal').hide();
$('.p-basic').click(function(){
    $('.mm-ppi-add-kr-modal').show();
});

$('.mm-ppi-add-kr-close').click(function(){
    $('.mm-ppi-add-kr-modal').hide();
});

$('#close').click(function(){
    $('.mm-ppi-add-kr-modal').hide();
});

$('.ev-popup.example02').hide();
$('.sg-pop-dim').hide();
$('.p-alert').click(function(){
    $('.ev-popup.example02').show();
    $('.sg-pop-dim').show();
});

$('.ev-button.ev-button-hov02.ev-button-yes').click(function(){
    $('.ev-popup.example02').hide();
    $('.sg-pop-dim').hide();
});

$('.ev-button.ev-button-hov01.ev-button-no').click(function(){
    $('.ev-popup.example02').hide();
    $('.sg-pop-dim').hide();
});

$('.ev-close').click(function(){
    $('.ev-popup.example02').hide();
    $('.sg-pop-dim').hide();
});

});