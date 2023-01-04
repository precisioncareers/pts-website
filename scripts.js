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

// window.addEventListener('scroll', function() {
//   var nav = document.querySelector('.side-nav');
//   var footer = document.querySelector('.footer');
//   var navBottom = nav.getBoundingClientRect().bottom + window.pageYOffset;
//   var footerTop = footer.getBoundingClientRect().top + window.pageYOffset;
//   if (navBottom >= footerTop) {
//     nav.style.display = 'none';
//   } else {
//     nav.style.display = 'block';
//   }
// });

// First, get a reference to the navbar and footer elements
window.addEventListener('scroll', handleScroll);
const navbar = document.querySelector('#side-nav');
const footer = document.querySelector('#footer');

// Next, create a function that will be called whenever the window is scrolled
function handleScroll() {
  // Get the current scroll position of the page
  const scrollY = window.scrollY;

  // Get the top and bottom positions of the navbar and footer
  const navbarTop = navbar.offsetTop;
  const navbarBottom = navbarTop + navbar.offsetHeight;
  const footerTop = footer.offsetTop;
  const footerBottom = footerTop + footer.offsetHeight;

  // Check if the navbar and footer overlap
  if (navbarBottom >= footerTop) {
    // If they do, update the navbar's position to be at the top of the footer
    navbar.style.top = `${footerTop}px`;
  } else {
    // If they don't, set the navbar's position to be fixed to the top of the page
    navbar.style.top = '0';
  }
};

// Finally, attach the scroll event handler to the window

