const menuIcon = document.querySelector(".menu-icon")

function showMenu() {
  const menu = document.querySelector("#menu")
  menu.classList.toggle("show")
}

menuIcon.addEventListener("click", showMenu)