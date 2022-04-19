/* Adaptive Menu */
const adaptiveMenu = document.querySelector('.header-menu');
const nav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav__link');
const shdwBox = document.querySelector('.shadow-box');

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

const pet = {
    name: 'Jennifer',
    img: '../../assets/images/jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
}

    const petCards = document.querySelectorAll(".pets-card");
    const petWrapper = document.querySelector(".popup-wrapper");
    let petInfo = document.querySelector(".popup-block");
    petInfo.innerHTML = 
            `<div class="popup-block__item">
                <img src= "${pet.img}">
            </div>
            <div class="popup-block__item">
                <div class="popup-content">
                    <h3 class="popup-content__title">${pet.name}</h3>
                    <h4>${pet.type} ${pet.breed}</h4>
                    <h5 class="popup-content__subtitle">${pet.description}</h5>
                    <ul class="popup-list">
                        <li class="popup-list__item">
                            <div>${pet.age}</div>
                        </li>
                        <li class="popup-list__item">
                            <div>${pet.inoculations}</div>
                        </li>
                        <li class="popup-list__item">
                            <div>${pet.diseases}</div>
                        </li>
                        <li class="popup-list__item">
                            <div>${pet.parasites}</div>
                        </li>
                    </ul>
                </div>
            </div>`;
    
    petCards.forEach( petCard => petCard.addEventListener('click', () => {
        petWrapper.classList.toggle('active');
    }));

    /*  */