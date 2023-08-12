var hamburger = document.querySelector(".hamburger");
var open = document.querySelector(".open");
var close = document.querySelector(".close");
var navBar = document.querySelector(".nav-bar");
var icon = document.querySelector(".new i");

hamburger.onclick = function() {
  navBar.classList.toggle("active");
  const isOpen = navBar.classList.contains("active");
  icon.classList = isOpen

  ? 'bx bx-x'
  : 'bx bxs-chevrons-down'
  
  // icon.classList.toggle("bxs-chevrons-up");
}
