const visual = document.querySelector('.wadiz__visual');
const visualImage = document.querySelector('.wadiz__visual__image');
const visualLabel = document.querySelector('.wadiz__visual__label');
const visualTitle = document.querySelector('.wadiz__visual__title');
const visualText01 = document.querySelector('.wadiz__visual__text.text01');
const visualText02 = document.querySelector('.wadiz__visual__text.text02');
let zoom = 1;
let base = 0;
const ZOOM_SPEED = 0.00033;

document.addEventListener(`wheel`, (e) => {
    let scroll = window.scrollY;
    if (scroll < (visual.offsetHeight / 3)) {
        visualImage.style.transform = `scale(${1 + (scroll * ZOOM_SPEED)})`;
        visualImage.classList.remove('black');
        visualLabel.style.opacity = 1 - (scroll * 0.001);
        visualTitle.style.opacity = 1 - (scroll * 0.001);
        visualText01.classList.remove('show');
    } else if (scroll > (visual.offsetHeight / 3) && scroll < ((visual.offsetHeight) / 3) * 2) {
        visualImage.classList.add('black');
        visualLabel.style.opacity = 0.5;
        visualTitle.style.opacity = 0;
        visualText01.classList.add('show');
        visualText02.classList.remove('show');
    } else if (scroll > ((visual.offsetHeight) / 3) * 2) {

        visualImage.classList.add('black');
        visualLabel.style.opacity = 0.5;
        visualTitle.style.opacity = 0;
        visualText01.classList.remove('show');
        visualText02.classList.add('show');
        visual.classList.remove('end');
    }
});

const reivewSwiper = new Swiper('.wadiz__review .swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 3,
        },
    }
})

