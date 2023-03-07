const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation--close');
const navigationOpen = document.querySelector('.navigation--open');
const overlay = document.querySelector('.overlay');

const openNavgiation = () => { 
    navigation.classList.add("navigation--active");
    overlay.classList.add("overlay--active");
};

const closeNavgiation = () => { 
    navigation.classList.remove("navigation--active");
    overlay.classList.remove("overlay--active");
};

navigationOpen.addEventListener("click", openNavgiation);
navigationClose.addEventListener("click", closeNavgiation);

overlay.addEventListener("click", closeNavgiation);