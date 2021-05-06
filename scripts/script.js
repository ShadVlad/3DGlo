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

  //slider
  const slider = () => {
    const slide = document.querySelectorAll(".portfolio-item"),
      btn = document.querySelectorAll(".portfolio-btn"),
      dots = document.querySelector(".portfolio-dots"),
      slider = document.querySelector(".portfolio-content");
    let dot;

    const addDot = () => {
      for (let i = 1; i <= slide.length; i++) {
        let newDot = document.createElement("li");
        //console.log("newDot: ", newDot);
        newDot.classList.add("dot");
        if (i === 1) {
          newDot.classList.add("dot-active");
        }
        dots.append(newDot);
        //console.log("dots: ", dots);
      }

      dot = document.querySelectorAll(".dot");
    };
    let currentSlide = 0,
      interval;
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () => {
      //console.log("dot: ", dot);
      //console.log("currentSlide: ", currentSlide);
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      currentSlide++;
      currentSlide = currentSlide % slide.length;
      //console.log("currentSlide: ", currentSlide);
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches(".portfolio-btn, .dot")) {
        return;
      }
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches("#arrow-left")) {
        currentSlide--;
      } else if (target.matches(".dot")) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      //console.log("currentSlide: ", currentSlide);

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
      //console.log("currentSlide: ", currentSlide);
    });
    slider.addEventListener("mouseover", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        stopSlide();
      }
    });

    slider.addEventListener("mouseout", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        startSlide();
      }
    });

    addDot();
    startSlide(1500);
  };

  slider();

  // command
  const command = () => {
    const commands = document.querySelector(".command");
    commands.addEventListener("mouseover", (event) => {
      if (event.target.matches(".command__photo")) {
        event.target.src = event.target.dataset.img;
        //console.log("event.target.src: ", event.target.dataset.img);
      }
    });

    commands.addEventListener("mouseout", (event) => {
      if (event.target.matches(".command__photo")) {
        event.target.src = event.target.dataset.img.replace("a.", ".");
        //console.log("event.target.src: ", event.target.dataset.img);
      }
    });
  };

  command();

  //calculator
  const calculator = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block"),
      calcType = document.querySelector(".calc-type"),
      calcSquare = document.querySelector(".calc-square"),
      calcDay = document.querySelector(".calc-day"),
      calcCount = document.querySelector(".calc-count"),
      totalValue = document.getElementById("total"),
      summInput = document.querySelectorAll(".calc-item");

    console.log("totalValue: ", totalValue.textContent);
    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
      //console.log("typeValue: ", typeValue);
      //console.log("squareValue: ", squareValue);
      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
        total = typeValue == 1.4 ? total.toFixed(2) : total;
        //console.log("typeValue: ", typeValue);
        //console.log("total: ", total);
      } else {
        total = 0;
      }
      console.log("total: ", total);
      if (total > 0) {
        outNum(total);
      }

      //totalValue.textContent = total;
    };
    calcBlock.addEventListener("change", (event) => {
      const target = event.target;
      // if (
      //   target.matches(".calc-type") ||
      //   target.matches(".calc-square") ||
      //   target.matches(".calc-day") ||
      //   target.matches(".calc-count")
      // ) {
      //   console.log(1);
      // }
      //

      if (target.matches("select") || target.matches("input")) {
        countSum();
      }
    });
    //console.log("nameInput: ", summInput);

    const readInputSumm = (event) => {
      //console.log("event: ", event);
      event.target.value = event.target.value.replace(/[^0-9]/, "");
    };

    summInput.forEach((item) => {
      //console.log("item: ", item);
      item.addEventListener("keyup", readInputSumm);
    });

    //const time = 10;
    //const step = 2;
    function outNum(num) {
      console.log("num: ", num);
      //let e = document.querySelector("#out");
      let n = 0;
      //let step = 1;
      //let t = Math.round(time / num / step);
      //console.log("t: ", t);
      let interval = setInterval(() => {
        n = n + 1;
        // switch (n) {
        //   case 10:
        //     step = 5;
        //     break;
        //   case 100:
        //     step = 50;
        //     break;
        //   case 1000:
        //     step = 500;
        //     break;
        //   case 10000:
        //     step = 5000;
        //     break;

        //   default:
        //     break;
        // }
        if (n >= num) {
          clearInterval(interval);
        }
        totalValue.textContent = n;
      }, 0);
    }

    //outNum(100, "#out");
  };
  calculator(100);

  //connect
  const connect = () => {
    const formInput = document.querySelectorAll("form"),
      nameInput = document.querySelectorAll("input[name='user_name']"),
      messageInput = document.querySelectorAll("input[name='user_message']"),
      emailInput = document.querySelectorAll("input[name='user_email']"),
      phoneInput = document.querySelectorAll("input[name='user_phone']");
    console.log("formInput: ", formInput);

    const readInputName = (event) => {
      //console.log("nameInput: ", event);
      event.target.value = event.target.value.replace(/[^А-Яа-яЁё\s\W]+$/, "");
    };
    const readInputPhone = (event) => {
      //console.log("nameInput: ", event);
      event.target.value = event.target.value.replace(/[^\d\-\()]/, "");
    };

    const readInputEmail = (event) => {
      //console.log("nameInput: ", event);
      event.target.value = event.target.value.replace(
        /[^A-Za-z\.\@\-\!\*\'\~]/,
        ""
      );
    };

    const fixedName = () => {
      let val = event.target.value.replace(/\-{2,}/g, "-");
      val = val.split(/\s+/);
      event.target.value = val
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      console.log(
        "value: ",
        val.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      );
    };

    const fixedText = () => {
      let val = event.target.value.replace(/\-{2,}/g, "-");
      val = val.split(/\s+/);
      val[0] = val[0].charAt(0).toUpperCase() + val[0].slice(1);
      //val.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      event.target.value = val.map((w) => w).join(" ");
    };
    const fixedPhone = () => {
      let val = event.target.value.replace(/[^\d\()\-]/, "");
      //console.log("val: ", val);
      val = val.replace(/\-{2,}/g, "-");
      //console.log("val: ", val);
      event.target.value = val;
      //console.log("event: ", event.target.value);
    };
    const fixedEmail = () => {
      let val = event.target.value.replace(/[^A-Za-z\.\@\-\!\*\'\~]/g, "");
      val = val.replace(/\-{2,}/g, "-");
      val = val.replace(/\-/, "");
      val = val.replace(/\-$/, "");
      event.target.value = val;
      console.log("event: ", val);
    };
    formInput.forEach((item) => {
      item.addEventListener("keyup", (event) => {
        if (
          event.target.matches("input[name='user_name']") ||
          event.target.matches("input[name='user_message']")
        ) {
          console.log("event.target: ", event.target);
          readInputName(event);
          //event.target.addEventListener("blur", correct);
        } else if (event.target.matches("input[name='user_email']")) {
          readInputEmail(event);
        } else if (event.target.matches("input[name='user_phone']")) {
          readInputPhone(event);
        }
      });
      // item.addEventListener("blur", (event) => {
      //   console.log("event.target: ", event.target);
      // });
    });
    nameInput.forEach((item) => {
      //item.addEventListener("keyup", readInputName);
      item.addEventListener("blur", (event) => {
        //console.log("event.target blur: ", event.target);
        fixedName();
      });
    });

    messageInput.forEach((item) => {
      //item.addEventListener("keyup", readInputName);
      item.addEventListener("blur", (event) => {
        //console.log("event.target: ", event.target);
        fixedText();
      });
    });

    phoneInput.forEach((item) => {
      //item.addEventListener("keyup", readInputPhone);
      item.addEventListener("blur", (event) => {
        console.log("event.target: ", event.target);
        fixedPhone();
      });
    });

    emailInput.forEach((item) => {
      //item.addEventListener("keyup", readInputEmail);
      item.addEventListener("blur", (event) => {
        //console.log("event.target: ", event.target);
        fixedEmail();
      });
    });
  };
  connect();
});
