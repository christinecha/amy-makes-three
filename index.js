$('body').hide();

$(document).ready(function(){
  $('body').fadeIn(2000);
});

$(document).ready(function(){
  $('.strip-1 .bxslider').bxSlider({
    randomStart: true,
    stopAuto: false,
    autoDirection: 'prev',
    auto: true,
    controls: false,
  });

  $('.strip-2 .bxslider').bxSlider({
    randomStart: true,
    stopAuto: false,
    pause: 6300,
    auto: true,
    controls: false,
  });

  $('.strip-3 .bxslider').bxSlider({
    randomStart: true,
    stopAuto: false,
    autoDirection: 'prev',
    auto: 5200,
    controls: false,
  });
});

// make text flicker
setInterval(function(){
  var random1 = Math.random() * 2;
  var random2 = Math.random() * 2;
  var random3 = Math.random() * 2;
  var string = random1 + 'px ' + random2 + 'px ' + random3 + 'px #ff0000';
  $('.image-strip-1 h1').css('text-shadow', string);
}, 100);


//MENU FUNCTIONS
$('#menu-open').on('click', function(){
  $('.menu-collapsed').hide();
  $('.menu-expanded').slideDown(500);
});

var collapseMenu = function(){
  $('.menu-expanded').slideUp(500, function(){
    $('.menu-collapsed').show();
  });
};

$('.menu-expanded .menu-close').on('click', collapseMenu);

$('.menu-expanded').on('click', 'a', function(){
  var selected = $(this).attr('id');
  var selectedClass = '.' + selected;
  $('.emphasis-box').hide();
  collapseMenu();
  $(selectedClass).show();
});

$('.emphasis-box').on('click', '.menu-close', function(){
  $(this).parent().parent('.emphasis-box').hide();
});











///
