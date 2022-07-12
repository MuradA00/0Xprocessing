// function showRow(bullet, row) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.querySelectorAll(".media__row");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("bullet");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active-bullet", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(row).style.display = "block";
//   bullet.currentTarget.className += " active-bullet";
// }


// function showDisplay(bulletBtn, display) {
//   // Declare all variables
//   var i, tabContent, tabLinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabContent = document.querySelectorAll(".tools__inner");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tabLinks = document.getElementsByClassName("pannel__btn");
//   for (i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].className = tabLinks[i].className.replace("active-panel-btn", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(display).style.display = "grid";
//   bulletBtn.currentTarget.className += " active-panel-btn";
// }
