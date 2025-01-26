
var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerView: 4,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    
});

