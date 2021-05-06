const toggleMenu = () => {
  const btnMenu = document.querySelector(".menu"),
    menu = document.querySelector("menu");
  //0closeBtn = document.querySelector(".close-btn"),
  //menuItems = menu.querySelectorAll("ul>li");

  const handlerMenu = () => {
    menu.classList.toggle("active-menu");
  };

  btnMenu.addEventListener("click", handlerMenu);

  menu.addEventListener("click", (event) => {
    let target = event.target;

    if (target.classList.contains("close-btn")) {
      handlerMenu();
    } else {
      //target = target.closest("li");
      if (target.tagName === "A") {
        handlerMenu();
      }
    }
  });
  // closeBtn.addEventListener("click", handlerMenu);

  // menuItems.forEach((element) =>
  //   element.addEventListener("click", handlerMenu)
  // );
};

export default toggleMenu;
