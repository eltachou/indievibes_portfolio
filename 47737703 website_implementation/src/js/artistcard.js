// Carousel for the artist cards - Code referenced from YouTube by CodingNepal
const artistCarousel = document.querySelector('.artist-carousel');
const artistcarouselButtons = document.querySelectorAll('.artist-carousel-button button');
const artistfirstCardWidth = artistCarousel.querySelector('.artist-card').offsetWidth;

// Carousel buttons effective - artist
artistcarouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        artistCarousel.scrollLeft += button.id === "artist-prev" ? -artistfirstCardWidth : artistfirstCardWidth;
    })
})