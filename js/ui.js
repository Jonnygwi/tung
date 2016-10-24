$(document).ready(function() {
  $('#try-button').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#try").offset().top
    }, 1000);
  })
  $('#how-button').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#how").offset().top
    }, 1000);
  })
  $('#what-button').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#what").offset().top
    }, 1000);
  })
});
