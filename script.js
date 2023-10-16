// JavaScript for responsive navigation menu
function toggleMobileMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Attach event listener to the mobile menu icon/button
document.querySelector(".mobile-menu-icon").addEventListener("click", toggleMobileMenu);

// Sample JavaScript function to display a welcome message
function showWelcomeMessage() {
    alert("Welcome to Maria Decor - Smart Home Solutions!");
}

// Attach event listener to a button or element, if needed
document.getElementById("welcome-button").addEventListener("click", showWelcomeMessage);

