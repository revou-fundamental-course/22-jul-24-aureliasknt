const images = [
    'assets/images/banner1.jpg',
    'assets/images/banner2.jpg',
    'assets/images/banner3.jpg'
];

let currentIndex = 0;
const mainBanner = document.querySelector('.main-banner');

function changeBanner() {
    currentIndex = (currentIndex + 1) % images.length;
    mainBanner.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBanner, 5000); // Change image every 5 seconds
