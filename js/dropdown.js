function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//  Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.openbtn')) {

  var dropdowns = document.getElementsByClassName("sidebar");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "80%";
  document.getElementById("menu-responsive").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("menu-responsive").style.marginLeft = "0";
}
