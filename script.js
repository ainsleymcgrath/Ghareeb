// show/hide menu
"use strict"
var button = document.getElementById("john");

button.onclick = function() {
  var menu = document.getElementById("menu_img");
  if (menu.style.display !== "block") {
    menu.style.display = "block"
  } else {
    menu.style.display = "none"
  }
}
