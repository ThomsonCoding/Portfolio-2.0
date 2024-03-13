    // init Swiper:
    const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        thresholdDelta: 70,
    },
    breakpoints: {
        560: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
    });
