const menuListLink = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");

//спред оператор соберет все menuListLink и добавит к ним mainScroll
const newArray = [...menuListLink, mainScroll];

console.log(newArray);
newArray.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // attributes:href:
    // console.dir(event.target.getAttribute("href").substr(1)); //event.target.getAttribute("href"). получаем
    //атрибут  href ссылки, на которую кликнули
    //substr(1)-метод, который удалит 1 символ из href
    const ID = event.target.getAttribute("href").substr(1);
    //ID секция до которой мы прокручиваем экран при клике на ссылку

    document
      .getElementById(ID)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
