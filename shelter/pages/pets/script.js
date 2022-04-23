import pets from '../../js/pets.js';
console.log(pets);

/* Adaptive Menu */
const page = document.querySelector('.shelter-page');
const adaptiveMenu = document.querySelector('.header-menu');
const nav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav__link');
const shdwBox = document.querySelector('.shadow-box');

function openMenu() {
  adaptiveMenu.classList.add('active');
  nav.classList.add('active');
  shdwBox.classList.add('active');
  page.classList.add('lock');
}

function closeMenu() {
  adaptiveMenu.classList.remove('active');
  nav.classList.remove('active');
  shdwBox.classList.remove('active');
  page.classList.remove('lock');
}

adaptiveMenu.addEventListener('click', () => {
  if (adaptiveMenu.classList.contains('active')) {
    closeMenu();
  } else
    openMenu();
});

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
  closeMenu();
}));

shdwBox.addEventListener('click', () => {
  if (shdwBox.classList.contains('active')) {
    closeMenu();
  }
});
/* Adaptive Menu */

