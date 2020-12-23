var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
var sideNav, btnHamburger;
sideNav = document.getElementById('sideNav');
btnHamburger = document.getElementById('btnHamburger');
document.getElementById('btnHamburger').addEventListener('click', function () {
    btnHamburger.classList.toggle('open');
    if (btnHamburger.classList.contains('open')) {
        sideNav.style.right = '0';
    } else {
        sideNav.style.right = '-30rem';
    }
})