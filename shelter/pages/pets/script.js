/* Adaptive Menu */
const adaptiveMenu = document.querySelector('.header-menu');
const nav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav__link');


adaptiveMenu.addEventListener('click', () => {
    adaptiveMenu.classList.toggle('active');
    nav.classList.toggle('active');

});

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    adaptiveMenu.classList.remove('active');
    nav.classList.remove('active');

}));