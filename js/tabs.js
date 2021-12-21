const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");
//data-tabs-field есть у всех изображений и текстах в секции про дизайн
//console.log(tabsContentElems);
//tabs
// tabsHandlerElemts.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     // const dataButton = link.target.getAttribute("data-tabs-field");
//     //console.log(event.getAttribute("data-tabs-field"));
//     if (tabsHandlerElemts) {
//       link.classList.toggle("design-list__item_active");
//     }

//     designDescr.forEach((elem) => {
//       elem.classList.toggle("hidden");
//     });
//   });
// });
for (let btn of tabsHandlerElems) {
  btn.addEventListener("click", () => {
    /*по клику перебираем кнопки и удаляем класс
      design-list__item_active у всех кнопок*/
    tabsHandlerElems.forEach((item) =>
      item.classList.remove("design-list__item_active")
    );
    btn.classList.add("design-list__item_active");

    // console.log(btn.dataset.tabsHandler);
    tabsContentElems.forEach((content) => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        console.log(content.dataset.tabsField);
        console.log(btn.dataset.tabsHandler);
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
    /*for (let content of tabsContentElemes) {
      
      content.classList.remove("hidden");
    }*/
  });
}
