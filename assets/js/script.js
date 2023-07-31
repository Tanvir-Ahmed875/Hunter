function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML=value;
    
  }
  
  var typed= new Typed(".type",{
        strings: [
            "Your Dreams",
            "Your Happyness",
            // "Designer.",
            // "Developer.",
            // "freelancer.",
        ],
        typeSpeed:60,
        backSpeed:60,
        loop:true,
    });
    jQuery(document).ready(function($) {
$('.count').counterUp({
    delay: 10,
    time: 1000
});
});


$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('.menu').slideToggle( 1000);
    });



});
