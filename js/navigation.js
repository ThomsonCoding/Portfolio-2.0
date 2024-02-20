const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation--close');
const navigationOpen = document.querySelector('.navigation--open');
const overlay = document.querySelector('.overlay');
const pageContent = document.querySelector('.page');

const openNavgiation = () => { 
    navigation.classList.add("navigation--active");
    overlay.classList.add("overlay--active");
    document.body.classList.add("no-scroll");
};

const closeNavgiation = () => { 
    navigation.classList.remove("navigation--active");
    overlay.classList.remove("overlay--active");
    document.body.classList.remove("no-scroll");
};

navigationOpen.addEventListener("click", openNavgiation);
navigationClose.addEventListener("click", closeNavgiation);

overlay.addEventListener("click", closeNavgiation);



