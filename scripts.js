$( document ).ready(function() {
  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });
});

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// } 

console.log('Bob');

AOS.init({
  duration: 2500 // values from 0 to 3000, with step 50ms
});

console.log('Dave');

lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
});

$(".testimonial-slider-container").slick({
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 500,
  arrows: false,
  accessibility: true,
  dots: true,
  fade: false,
  infinite: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  slidesToScroll: 1
  
});

$(".testimonial-slider-container-index").slick({
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 500,
  arrows: true,
  accessibility: true,
  dots: false,
  fade: false,
  infinite: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  slidesToScroll: 1
  
});

$( document ).ready(function() {

  $(".team-member").click(function(){
      var target = $(this).attr("data-target");
     $(".popup").each(function(){
       if($(this).attr("data-pop") == target){
         $(this).addClass("onscreen");
         console.log("bob");
       }});
    $(".popUpOverlay").addClass("onscreen");
  });
 
 $(".popUpOverlay").click(function(){
 $(".popup").removeClass("onscreen");
    $(".popUpOverlay").removeClass("onscreen");
  });
 
   
 $(".popupX").click(function(){
   $(".popup").removeClass("onscreen");
   $(".popUpOverlay").removeClass("onscreen");
 })


//  lazy loading lower res and then higher res images
 $(window).on('load', function(){ 
  $('.lazy-div').each(function(){
    var background = $(this).attr("data-main");
    $(this).css("background-image","url("+ background +")");
  });

  $('.lazy-img').each(function(){
    var background = $(this).attr("data-main");
    $(this).attr("src",background);
  });
});

});



