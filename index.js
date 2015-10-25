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
      var slideQty = slider1.getSlideCount();
      var randomSlide = Math.round(Math.random() * (slideQty - 1));
      while (randomSlide == current) {
        randomSlide = Math.round(Math.random() * (slideQty - 1));
      };
      console.log (num, randomSlide);
      slider1.goToSlide(randomSlide);
    } else if (num == 2) {
      var current = slider2.getCurrentSlide();
      var slideQty = slider2.getSlideCount();
      var randomSlide = Math.round(Math.random() * (slideQty - 1));
      while (randomSlide == current) {
        randomSlide = Math.round(Math.random() * (slideQty - 1));
      };
      console.log (num, randomSlide);
      if ((randomSlide == 1) || (randomSlide == 2) || (randomSlide == 5)){
        $('.image-strip-2 .text h1').css('color', 'black');
      } else {
        $('.image-strip-2 .text h1').css('color', 'white');
      }
      slider2.goToSlide(randomSlide);
    } else if (num == 3) {
      var current = slider3.getCurrentSlide();
      var slideQty = slider3.getSlideCount();
      var randomSlide = Math.round(Math.random() * (slideQty - 1));
      while (randomSlide == current) {
        randomSlide = Math.round(Math.random() * (slideQty - 1));
      };
      console.log (num, randomSlide);
      slider3.goToSlide(randomSlide);
    }
  }, 3000);

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
