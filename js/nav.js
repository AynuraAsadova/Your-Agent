function openNav() {
  document.getElementById("hidden_menu").style.width = "100%";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("hidden_menu").style.width = "0";
  document.getElementsByTagName("body")[0].style.overflow = "visible";
}
