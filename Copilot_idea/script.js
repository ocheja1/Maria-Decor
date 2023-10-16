// Function to toggle the navigation menu for mobile devices
function toggleMobileMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Attach event listener to the mobile menu icon/button
document.querySelector(".mobile-menu-icon").addEventListener("click", toggleMobileMenu);

// JavaScript for carousel auto-slide
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.opacity = 1;
        } else {
            image.style.opacity = 0;
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 8000); // Change image every 8 seconds

// Optional: Add navigation buttons for user control
document.querySelector('.next-button').addEventListener('click', nextImage);
document.querySelector('.prev-button').addEventListener('click', previousImage);