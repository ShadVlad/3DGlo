const commands = () => {
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

export default commands;
