const menu = document.getElementById('menu');

function openMenu() {
  if (menu.className === "menu") {
    menu.className += " openUL";
  } else {
    menu.className = "menu";
  }
}