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

export default togglePopUp;
