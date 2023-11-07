document.addEventListener("DOMContentLoaded", function () {
    const sidenav = document.querySelector(".sidenav");
    const searchButton = document.getElementById("search-button");

    // Show the side navigation
    document.getElementById("open-sidenav").addEventListener("click", function () {
        sidenav.classList.add("active");
    });

    // Hide the side navigation
    document.getElementById("close-sidenav").addEventListener("click", function () {
        sidenav.classList.remove("active");
    });

    // Handle search button click
    searchButton.addEventListener("click", function () {
        const searchQuery = document.getElementById("product-search").value;
        // Perform search logic here (e.g., display search results on your main content)
        console.log("Search for: " + searchQuery);
    });
});


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
} 
