/* Adaptive Menu */
const adaptiveMenu = document.querySelector('.header-menu');
const nav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav__link');
const shdwBox = document.querySelector('.shadow-box');
/*const headerLogo = document.querySelector('.header-logo.active');*/

adaptiveMenu.addEventListener('click', () => {
    adaptiveMenu.classList.toggle('active');
    nav.classList.toggle('active');
    shdwBox.classList.toggle('active');

});

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    adaptiveMenu.classList.remove('active');
    nav.classList.remove('active');
    shdwBox.classList.remove('active');

}));