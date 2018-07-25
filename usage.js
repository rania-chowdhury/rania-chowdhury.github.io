document.getElementById("defaultOpen").click();
function openTab(tabName, element, color) {
    // declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    // show specific tab content
    document.getElementById(tabName).style.display = "block";
    // add specific color to button used to open tab content
    element.style.backgroundColor = color;
}

function openPage(pageName, element, color) {
    // declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("contentlink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    // show specific tab content
    document.getElementById(pageName).style.display = "block";
    // add specific color to button used to open tab content
    element.style.backgroundColor = color;
}

// slideshow logic
var slideIndex = 1;
showSlide(slideIndex);
//next/prev controls
function shiftSlide(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}