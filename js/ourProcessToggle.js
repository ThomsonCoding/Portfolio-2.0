const ourProcessSection = document.querySelector('.our-process__section');
const ourProcessToggleButtons = document.querySelectorAll('.our-process__toggle button');

ourProcessToggleButtons.forEach((button) => {
    button.addEventListener('click',  () => toggleButton(button));
})

function toggleButton(button) {
    ourProcessSection.classList = `our-process__section ${button.id}`; 
}