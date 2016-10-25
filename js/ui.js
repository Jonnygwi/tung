$(document).ready(function() {
  $('#try-button').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#try").offset().top
    }, 1000);
    gaSignUp();
  })
  $('#how-button').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#how").offset().top
    }, 1000);
    gaSignUp();
  })
  $('#what-button').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#what").offset().top
    }, 1000);
    gaSignUp();
  })
});

function gaSignUp (){
  ga('send', 'event', 'SignUp', 'Attempt');
}
