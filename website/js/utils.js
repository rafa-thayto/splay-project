// Carousel Team
$(document).ready(function(){
    $('.carousel').carousel({
        shift:100,
        dist:50
    });
  });

// Slick
// $('.splay-universe').slick();

$('.splay-universe').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});