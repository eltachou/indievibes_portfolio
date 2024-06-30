// Carousel for the music cards - Code referenced from YouTube by CodingNepal
const carousel = document.querySelector('.music-carousel');
const carouselButtons = document.querySelectorAll('.carousel-button button');
const firstCardWidth = carousel.querySelector(".music-card").offsetWidth;

// Carousel buttons effective - music
carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        carousel.scrollLeft += button.id === "prev" ? -firstCardWidth : firstCardWidth;
    })
})
