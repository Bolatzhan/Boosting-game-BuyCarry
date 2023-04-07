addEventListener("DOMContentLoaded", (event) => {
  // FAQ-tabs
  const tabsBtn = document.querySelectorAll(".faq-tabs__item");
  const tabsItems = document.querySelectorAll(".faq-tabs__block");

  tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("_active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("_active");
        });
        tabsItems.forEach(function (item) {
          item.classList.remove("_active");
        });
        currentBtn.classList.add("_active");
        currentTab.classList.add("_active");
      }
    });
  });

  // Accordion Faq
  const accordionContent = document.querySelectorAll(".faq-accordion__inner");

  accordionContent.forEach((item, index) => {
    let question = item.querySelector(".faq-accordion__question");
    question.addEventListener("click", () => {
      item.classList.toggle("_open");

      let answer = item.querySelector(".faq-accordion__answer");

      if (item.classList.contains("_open")) {
        answer.style.height = "150px";
      } else {
        answer.style.height = "0px";
      }
      removeOpen(index);
      console.log(answer);
    });
  });

  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove("_open");

        let answer = item2.querySelector(".faq-accordion__answer");
        answer.style.height = "0px";
      }
    });
  }

  // Language
  const langList = document.querySelector(".social-lang__list-link");
  const chooseLang = langList.querySelector(".social-lang__sub-list");

  langList.addEventListener("click", () => {
    chooseLang.classList.toggle("_visible");
  });
  chooseLang.querySelectorAll(".social-lang__sub-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      chooseLang.classList.remove("_invisible");
    });
  });
});
