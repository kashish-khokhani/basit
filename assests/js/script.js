// sticky header
$(window).scroll(function(){
    var sticky = $('.sticky'),
    scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


// about slider
$('#about_slider').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout: 5000,
});

// header slider 
$('#home_slider').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText:['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>']
});

// change slider load
var owl = $('.owl-carousel');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
});

// wow 
wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();


// review slider
$('#review').owlCarousel({
    items:2,
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout: 5000,
});

// brand_logo_slider
$('#company_brand').owlCarousel({
    items:5,
    loop:true,
    margin:5,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 5000,
});

// blog slider
$('#blog').owlCarousel({
    items:3,
    loop:true,
    margin:5,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout: 5000,
});

// pre loader
$(document).ready(function(){
  setTimeout(function(){
    $('.preloader').fadeOut();
  },2000);
});

// accordian
$(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
});

// bottom to top
$(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 
  
  AOS.init();