$('body').hide();

$(document).ready(function(){
  $('body').fadeIn(2000);
});

$(document).ready(function(){
  var num = 1;

  var slider1 = $('.strip-1 .bxslider').bxSlider({
    randomStart: true,
    controls: false,
    pause: 4000,
  });

  var slider2 = $('.strip-2 .bxslider').bxSlider({
    randomStart: true,
    controls: false,
    pause: 4000,
  });

  var slider3 = $('.strip-3 .bxslider').bxSlider({
    randomStart: true,
    controls: false,
    pause: 4000,
  });

  setInterval(function(){
    if (num < 3){
      num+= 1;
    } else {
      num = 1;
    }

    if (num == 1) {
      var current = slider1.getCurrentSlide();
      var slideOrder = [0,8,1,7,2,6,3,5,4];
      var index = slideOrder.indexOf(current);
      if (index < 8) {
        index+= 1;
      } else {
        index = 0;
      };
      slider1.goToSlide(slideOrder[index]);
    } else if (num == 2) {
      var current = slider2.getCurrentSlide();
      var slideOrder = [0,7,1,6,8,2,5,3,4];
      var index = slideOrder.indexOf(current);
      if (index < 8) {
        index+= 1;
      } else {
        index = 0;
      };
      slider2.goToSlide(slideOrder[index]);
    } else if (num == 3) {
      var current = slider3.getCurrentSlide();
      var slideOrder = [0,1,7,2,6,3,8,5,4];
      var index = slideOrder.indexOf(current);
      if (index < 8) {
        index+= 1;
      } else {
        index = 0;
      };
      slider3.goToSlide(slideOrder[index]);
    }
  }, 2000);

});



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
  $(this).parent('.emphasis-box').hide();
});











///
