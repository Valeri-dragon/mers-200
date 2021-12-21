const featureLink = document.querySelectorAll(".feature__link");
const featureSub = document.querySelectorAll(".feature-sub");
console.log(featureLink);

/*featureLink.forEach((e, index) => {
  e.addEventListener("click", () => {
    /*featureLink.forEach((el, index) => {
      el.classList.remove("feature__link_active");
    });
    e.classList.toggle("feature__link_active");
    featureSub.forEach((el, index) => {
      el.classList.add("hidden");
    });
    if (e.classList.contains("feature__link_active")) {
      featureSub[index].classList.toggle("hidden");
    }
  });
  //e.removeEventListener("click", removeHidden);
});*/

/*решение*/

featureLink.forEach((btn) => {
  btn.addEventListener("click", () => {
    featureLink.forEach((btnItem, index) => {
      if (btnItem === btn) {
        btnItem.classList.toggle("feature__link_active");

        featureSub[index].classList.toggle("hidden");
      } else {
        btnItem.classList.remove("feature__link_active");
        featureSub[index].classList.add("hidden");
      }
    });
  });
});
