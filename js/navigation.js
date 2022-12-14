const body = document.querySelector('body');
const modalOpenButton = document.querySelector('.navigation__open');
const modalCloseButton = document.querySelector('.navigation__close');
const navigationMeuu = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');

modalOpenButton.addEventListener('click', () => {
    toggleModal();
});

modalCloseButton.addEventListener('click', () => {
    toggleModal();
});

overlay.addEventListener('click', () => {
    toggleModal();
});

const toggleModal = () => { 
    body.classList.toggle('no-scroll');
    navigationMeuu.classList.toggle('navigation--active');
    overlay.classList.toggle('overlay--active');
}
