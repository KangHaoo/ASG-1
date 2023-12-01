const menu = document.querySelector('#mobile-dropdown');
const menuLinks = document.querySelector('.navbar-pages');
//code to active the dropdown bar for the mobile function//
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
//code to allow slides shows in the main page//
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);