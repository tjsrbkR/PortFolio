const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        type: 'fraction',
    },
});