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

export default slider;
