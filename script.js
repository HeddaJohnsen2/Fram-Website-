document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const openMenu = document.getElementById("openHamburgerMenu");
  const closeMenu = document.getElementById("closedMenuButton");

  openMenu.addEventListener("click", () => {
    menu.classList.add("show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
