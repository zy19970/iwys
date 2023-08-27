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
  if (window.screen.width < 660)
  {
    document.getElementById("menu").style.display = 'none';
  }
  else
  {
    document.getElementById("touchon").style.display = '';
    document.getElementById("about").style.display = '';
  }

  if (window.screen.width > 500)
  {
    document.getElementById("socialsologn1").style.display='';
    document.getElementById("socialsologn2").style.display='';
    document.getElementById("socialsologn3").style.display='';
  }
  else{
    document.getElementById("socialsologn1").style.display='none';
    document.getElementById("socialsologn2").style.display='none';
    document.getElementById("socialsologn3").style.display='none';
  }
}

function disonload(){
  if (window.screen.width < 660) {
    if(window.screen.width < 367)
    {
      document.getElementById("menu").style.display = 'none';
    }
    else
    {
      document.getElementById("about").style.display = '';
      document.getElementById("touchon").style.display = '';
      document.getElementById("touchon").style.visibility = 'hidden';
    }
  }
  else
  {
    document.getElementById("touchon").style.display = '';
    document.getElementById("about").style.display = '';
  }

  if (window.screen.width > 500)
  {
    document.getElementById("socialsologn1").style.display='';
    document.getElementById("socialsologn2").style.display='';
    document.getElementById("socialsologn3").style.display='';
  }
  else{
    document.getElementById("socialsologn1").style.display='none';
    document.getElementById("socialsologn2").style.display='none';
    document.getElementById("socialsologn3").style.display='none';
  }
}
