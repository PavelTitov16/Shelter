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

function lockPage() {
  if (page.classList.contains('lock')) {
    page.classList.remove('lock');
  } else
    page.classList.add('lock');
}

function closeMenu() {
  adaptiveMenu.classList.remove('active');
  nav.classList.remove('active');
  shdwBox.classList.remove('active');
  lockPage();
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

/* Slider */
const slider = document.querySelector('.pets-block__slider');
slider.innerHTML =
  `<button class="sub-button" id="previous">
    <img src="../../assets/icons/arrow-left.svg" alt="arrow left">
  </button>
  <div class="slider__item">

  </div>
  <button class="sub-button" id="next">
    <img src="../../assets/icons/arrow-right.svg" alt="arrow right">
  </button>`;

const petsContainer = document.querySelector('.slider__item');
const next = document.getElementById('next');
const prev = document.getElementById('previous');

let sliderLength = 0;

function loadScreen() {
  if (window.innerWidth >= 1220) {
    sliderLength = 3;
  } else if (window.innerWidth < 1220 && window.innerWidth > 730) {
    sliderLength = 2;
  } else {
    sliderLength = 1;
  }
  return sliderLength;
}
loadScreen();

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1220) {
    sliderLength = 3;
  } else if (window.innerWidth < 1220 && window.innerWidth > 730) {
    sliderLength = 2;
  } else {
    sliderLength = 1;
  }
  createCard();
});

function createCard() {
  let petCard = "";

  let newSlider = [];
  let currentSlider = [];
  for (let i = 0; i < sliderLength; i++) {
    while (newSlider.length < sliderLength) {
      let number = Math.floor(Math.random() * 8);
      if (!newSlider.includes(pets[number]) && !currentSlider.includes(pets[number])) {
        let pet = pets[number];
        newSlider.push(pet);
        currentSlider = newSlider;

        petCard += `
    <div class="pets-card">
        <img class="pets-card__img" src="${pet.img}" alt="${pet.name}">
        <p class="pets-card__name">
          ${pet.name}
        </p>
        <button class="button secondary-btn">
          Learn more
        </button>
    </div>`;
      }
    }
  }
  petsContainer.innerHTML = petCard;
  newSlider = [];
}

createCard();

next.addEventListener('click', () => {
  createCard();
});

prev.addEventListener('click', () => {
  createCard();
});

/* Pop Up */

const petCards = document.querySelectorAll('.pets-card');

function createPop(obj) {
  const modalButton = document.querySelector('.popup-button');
  const petWrapper = document.querySelector('.popup-wrapper');
  let petInfo = document.querySelector('.popup-block');
  petInfo.innerHTML =
    `<div class="popup-block__item">
                <img src="../../assets/images/pets-jennifer.png" alt="dog">
            </div>
            <div class="popup-block__item">
                <div class="popup-content">
                    <h3 class="popup-content__title">${obj.name}</h3>
                    <h4>${obj.type} - ${obj.breed}</h4>
                    <h5 class="popup-content__subtitle">${obj.description}</h5>
                    <ul class="popup-list">
                        <li class="popup-list__item">
                            <div><b>Age: </b>${obj.age}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Inoculations: </b>${obj.inoculations}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Diseases: </b>${obj.diseases}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Parasites: </b>${obj.parasites}</div>
                        </li>
                    </ul>
                </div>
            </div>`;
  petWrapper.classList.add('active');
  lockPage();
  modalButton.addEventListener('click', () => {
    petWrapper.classList.remove('active');
    lockPage();
  });
}
petCards.forEach(petCard => petCard.addEventListener('click', () => {
  createPop(petCard);
}));

/* Pop Up */