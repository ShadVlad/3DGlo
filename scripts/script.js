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
      menu = document.querySelector("menu"),
      closeBtn = document.querySelector(".close-btn"),
      menuItems = menu.querySelectorAll("ul>li");

    const handlerMenu = () => {
      // if (
      //   !menu.style.transform ||
      //   menu.style.transform === `translate(-100%)`
      // ) {
      //   menu.style.transform = `translate(0)`;
      // } else {
      //   menu.style.transform = `translate(-100%)`;
      // }
      menu.classList.toggle("active-menu");
    };
    btnMenu.addEventListener("click", handlerMenu);
    closeBtn.addEventListener("click", handlerMenu);

    menuItems.forEach((element) =>
      element.addEventListener("click", handlerMenu)
    );
  };
  toggleMenu();

  // popup window
  const togglePopUp = () => {
    const popUp = document.querySelector(".popup"),
      body = document.querySelector("body"),
      popupContent = document.querySelector(".popup-content");
    (popUpBtn = document.querySelectorAll(".popup-btn")),
      (popUpClose = document.querySelector(".popup-close"));
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
    popUpClose.addEventListener("click", () => {
      popUp.style.display = "none";
    });
  };
  togglePopUp();

  //tabs
});
