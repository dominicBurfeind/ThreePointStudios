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



//Calender 
function generateCalendar() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var firstDay = new Date(year, month, 1).getDay();
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  var calendarHTML = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

  // Add empty cells for days before the first day of the month
  for (var i = 0; i < firstDay; i++) {
      calendarHTML += "<td></td>";
  }

  // Fill in the days of the month
  for (var i = 1; i <= daysInMonth; i++) {
      var date = new Date(year, month, i);
      var dayOfWeek = date.getDay();
      calendarHTML += "<td>" + i + "</td>";
      
      // Start a new row if it's Saturday
      if (dayOfWeek === 6 && i !== daysInMonth) {
          calendarHTML += "</tr><tr>";
      }
  }

  // Fill in remaining empty cells if necessary
  if (new Date(year, month, daysInMonth).getDay() !== 6) {
      var remainingDays = 6 - new Date(year, month, daysInMonth).getDay();
      for (var i = 0; i < remainingDays; i++) {
          calendarHTML += "<td></td>";
      }
  }

  calendarHTML += "</tr>";

  document.getElementById("calendar").innerHTML = calendarHTML;
}

// Initially generate calendar for the current month
generateCalendar();