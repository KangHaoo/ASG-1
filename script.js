const menu = document.querySelector('#mobile-dropdown');
const menuLinks = document.querySelector('.navbar-pages');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});