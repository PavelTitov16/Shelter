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
    if (adaptiveMenu.classList.contains('active') ) {
      closeMenu();
    } else 
    openMenu();
});

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
  closeMenu();
}));

shdwBox.addEventListener('click', () => {
  if (shdwBox.classList.contains('active') ) {
    closeMenu();
  }
});
/* Adaptive Menu */

const pet = {
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
}

    const petCards = document.querySelectorAll('.pets-card');
    const modalButton = document.querySelector('.popup-button');
    const petWrapper = document.querySelector('.popup-wrapper');
    let petInfo = document.querySelector('.popup-block');
    petInfo.innerHTML = 
            `<div class="popup-block__item">
                <img src="../../assets/images/pets-jennifer.png" alt="dog">
            </div>
            <div class="popup-block__item">
                <div class="popup-content">
                    <h3 class="popup-content__title">${pet.name}</h3>
                    <h4>${pet.type} - ${pet.breed}</h4>
                    <h5 class="popup-content__subtitle">${pet.description}</h5>
                    <ul class="popup-list">
                        <li class="popup-list__item">
                            <div><b>Age: </b>${pet.age}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Inoculations: </b>${pet.inoculations}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Diseases: </b>${pet.diseases}</div>
                        </li>
                        <li class="popup-list__item">
                            <div><b>Parasites: </b>${pet.parasites}</div>
                        </li>
                    </ul>
                </div>
            </div>`;
    
    petCards.forEach( petCard => petCard.addEventListener('click', () => {
        petWrapper.classList.add('active');
        
    }));

    modalButton.addEventListener('click', () => {
        petWrapper.classList.remove('active');
    });
    /*  */