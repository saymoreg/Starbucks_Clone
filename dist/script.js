const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");
});
