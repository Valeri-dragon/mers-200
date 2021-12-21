const burger = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");
const mainWrapper = document.querySelector(".main-wrapper");

console.log(burger);
const toggleMenu = () => {
  burger.classList.toggle("humburger-menu-active");
  menu.classList.toggle("menu-active");
};
burger.addEventListener("click", () => {
  const menuListLink = document.querySelectorAll(".menu-list__link");
  if (menuListLink) {
    menuListLink.forEach((event) => {
      event.addEventListener("click", toggleMenu);
    });
    mainWrapper.addEventListener("click", toggleMenu);
  }
  toggleMenu();
});
