//Slideshow 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-showcase-content");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



//Datum anzeige 
function showDate() {

  const date = new Date();
  document.getElementById("Datum").textContent = date;
  const stringDate = date.toLocaleString();
  const actualDate = stringDate.substring(0,25);
  document.getElementById("Datum").textContent = actualDate;

}

setInterval(function(){ showDate();}, 1000);


