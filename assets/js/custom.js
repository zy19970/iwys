// Scroll Top
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("up");
  } else {
    $('.top').removeClass("up");
  }
});

window.onload=function(){
  if (window.screen.width < 660) {
    document.getElementById("touchon").style.visibility = 'hidden';
  }
}
