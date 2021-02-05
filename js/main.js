const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        540: {
            slidesPerView: 2,
        },
    },
});