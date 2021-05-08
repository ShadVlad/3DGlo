const tabs = () => {
  const tabHeader = document.querySelector(".service-header"),
    tab = document.querySelectorAll(".service-header-tab"),
    tabContent = document.querySelectorAll(".service-tab");
  // console.log("tabContent: ", tabContent);
  // console.log("tabHeader: ", tabHeader);
  // console.log("tab: ", tab);
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add("active");
        tabContent[i].classList.remove("d-none");
      } else {
        tab[i].classList.remove("active");
        tabContent[i].classList.add("d-none");
      }
    }
  };

  toggleTabContent(0);
  tabHeader.addEventListener("click", (event) => {
    let target = event.target;
    console.log("target: ", target);
    target = target.closest(".service-header-tab");
    console.log("target: ", target);

    //while (target !== tabHeader) {
    //console.log("target: ", target);

    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
        //    })i
        //    return;
      });
      //  target = target.parentNode;
    }
  });
};

export default tabs;
