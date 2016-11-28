$(document).ready(function() {
  $hidden = $('.hidden, #hidden');
  $back = $('.back, #back');
  $hidden.hide();
  $('#notecards, .notecards').click(function(){
    $('#notecards, .notecards').fadeOut('fast', 150)
    $hidden.fadeIn('slow', 450);
  }); // end of notecards click

$back.click(function() {
  $hidden.fadeOut('fast', 150);
  $('#notecards, .notecards').fadeIn('slow', 450);
}); // end of back click

  
}); // end of document ready