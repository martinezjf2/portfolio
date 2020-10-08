Need to adjust
- see Rebecca Email that was sent.

Add
- section for testimonials
    - Ed Butcher
    - Robina Chowdhury
    - Miguel
    - David Kuhl
    - Dwayne
    - Amanda Rolon


- section for Skills such as spanish
- certificates
- make a slideshow of photos for the cover photo and not change during refreshing

http://www.cindykim.me/


function showSlides() {
    var slidesIndex = 0;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds



  instead of var slides equalling to document.getElement, you can add an array of images such as the first function on "randombg()"