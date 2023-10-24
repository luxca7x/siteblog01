menuButton = document.querySelector(".menu-btn");
menuItems = document.querySelector(".menu-items");
menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("ativo");
  if (menuButton.textContent == "close") {
  menuButton.innerHTML = "menu";
  } else {
    menuButton.innerHTML = "close";
  }
  menuItems.classList.toggle("ativo");
});
