console.log('bob')
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active')
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
} 

AOS.init({
  duration: 2500 // values from 0 to 3000, with step 50ms
});

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

});
