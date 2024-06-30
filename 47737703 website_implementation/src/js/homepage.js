// Carousel for homepage event-banner - Code referenced from w3schools.com
let carouselIndex = 1;
showCarousel(carouselIndex);

function slide(n) {
    showCarousel(carouselIndex = n);
}

function showCarousel(n) {
    let i;
    const carousel = document.getElementsByClassName('carousel-item');
    const dots = document.getElementsByClassName('dots');

    if (n > carousel.length) {
        carouselIndex = 1;
    } 
    if (n < 1) {
        carouselIndex = carousel.length;
    }
    for (i = 0; i < carousel.length; i++) {
        carousel[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', "");
    }
    carousel[carouselIndex-1].style.display = 'block';
    dots[carouselIndex-1].className += ' active';
}
