window.addEventListener("DOMContentLoaded", function () {
  ("use strict");

  function countTimer(deadline) {
    let timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining =
          dateStop - dateNow > 0 ? (dateStop - dateNow) / 1000 : 0,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor((timeRemaining / 60 / 60) % 24);
      //console.log("timeRemaining: ", timeRemaining);
      return { timeRemaining, hours, minutes, seconds };

      //days = Math.floor(timeRemaining / 60 / 60 / 24);
    }

    function withZero(digit) {
      return digit < 10 ? "0" + digit : digit;
    }
    function updateClock() {
      let timer = getTimeRemaining();
      timerHours.textContent = withZero(timer.hours);
      timerMinutes.textContent = withZero(timer.minutes);
      timerSeconds.textContent = withZero(timer.seconds);
    }
    updateClock();
    setInterval(updateClock, 1000);
  }
  countTimer("30 july 2021");

  // menu
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
  toggleMenu();

  // popup window
  const togglePopUp = () => {
    const popUp = document.querySelector(".popup"),
      body = document.querySelector("body"),
      popupContent = document.querySelector(".popup-content"),
      popUpBtn = document.querySelectorAll(".popup-btn");
    //popUpClose = document.querySelector(".popup-close");
    let animeInterval, count;
    const popUpAnimate = () => {
      animeInterval = requestAnimationFrame(popUpAnimate);
      count++;

      if (count < 38) {
        popupContent.style.left = count + "%";
        //console.log(" mainForm.style.left: ", popupContent.style.left);
      } else {
        cancelAnimationFrame(animeInterval);
      }
      //console.log("count: ", count);
    };
    popUpBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popUp.style.display = "block";
        count = -50;
        //console.log("window.getComputedStyle(body).width: ", body.offsetWidth);
        if (body.offsetWidth >= 768) {
          animeInterval = requestAnimationFrame(popUpAnimate);
        }
        //popupContent.style.left = 0;
      });
    });
    // popUpClose.addEventListener("click", () => {
    //   popUp.style.display = "none";
    // });

    popUp.addEventListener("click", (event) => {
      let target = event.target;

      if (target.classList.contains("popup-close")) {
        popUp.style.display = "none";
      } else {
        target = target.closest(".popup-content");
        if (!target) {
          popUp.style.display = "none";
        }
      }
    });
  };
  togglePopUp();

  //tabs
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
          //    });
          //    return;
        });
        //  target = target.parentNode;
      }
    });
  };

  tabs();
});
