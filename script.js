document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const openMenu = document.getElementById("openHamburgerMenu");
  const closeMenu = document.getElementById("closedMenuButton");

  // Open the menu
  openMenu.addEventListener("click", () => {
    menu.classList.add("show");
  });

  // Close the menu
  closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
