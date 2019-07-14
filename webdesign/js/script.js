$(window).on('scroll',function(){
    if( $(window).scrollTop()){
        $('header').addClass('scroll');
    }
    else
    {
        $('header').removeClass('scroll');
    }
})




$('.search').on('click', function(e){
    e.preventDefault();
    $('.input_box').toggleClass('input_active');
});





$('.modal_button_1, .modal_content_1').on('click', function(){
    if ($)
   $('.modal_1').toggle('modal_active') 
});
$('.modal_button_2, .modal_content_2').on('click', function(){
    if ($)
   $('.modal_2').toggle('modal_active') 
});
$('.modal_button_3, .modal_content_3').on('click', function(){
    if ($)
   $('.modal_3').toggle('modal_active') 
});
$('.modal_button_4, .modal_content_4').on('click', function(){
    if ($)
   $('.modal_4').toggle('modal_active') 
});





$('.play_btn').hover(function(){
    $(this).toggleClass('play_btn_active');
});