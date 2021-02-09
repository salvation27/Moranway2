$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
});


$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        }
    }
})




$('.owl-carousel').owlCarousel({
    loop:false,
    mouseDrag : false,
    touchDrag : false,
    responsive:{
        375:{
            items:1
        },
        768:{
            items:2,
            loop:true,
            mouseDrag : true,
            touchDrag : true,
        },
       
        992:{
            items:3,
            mouseDrag : false,
            touchDrag : false,
        },
    }
})




$(document).ready(function() {
  
  $('.burger_test').click(function() {
    $('.brger_menu').toggleClass('vis');
  });
});

$(document).ready(function() {
  $('.closer').click(function() {
    $('.brger_menu').click('brger_menu');
  });
});


jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](500);           
    });
});





// $(document).ready(function() {
//   $('.closer').click(function() {
//     $('.brger_menu').click('brger_menu');
//   });
// });

$(function(){
// открывает модальное окно знакомиться
  $ ('.header_btn_call').click(function(){
    $('#exampleModal1').arcticmodal();  
  });
});


(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


// появление меню по нажатии на кнопку


$(function(){
// открывает модальное окно знакомиться
  $ ('.header_cintact_mail_btn').click(function(){
    $('#exampleModal1').arcticmodal();  
  });
});



$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });





// let cardsCity = document.querySelector('.popular_way_card')
let cardsCity = document.querySelectorAll('.popular_way_card');
let cardsCityMoreBtn = document.querySelector('.popular_way_btn_more');

// console.log(cardsCity)
for(let i = 10 ; i < cardsCity.length ;i++ ){
 console.log(cardsCity[i])
 if(cardsCity[i]) {
  cardsCity[i].classList.add('none')
  cardsCity[i].classList.add('visuallyhidden')
 }
}



cardsCityMoreBtn.addEventListener('click',show)



function show () {
  for(let i = 10; i < cardsCity.length; i++){
     if(cardsCity[i].classList.contains('none')){  
      cardsCity[i].classList.remove('none');
    }
  } 
}