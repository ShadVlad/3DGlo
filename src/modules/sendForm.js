const sendForm = (form) => {
  const errorMessage = "Что-то пошло не так...",
    loadMessage = "Загрузка...",
    successMessage = "Спасибо! Мы скоро с Вами свяжемся!";

  console.log("form: ", form.id);

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem;";

  if (form.id === "form3") {
    statusMessage.style.color = "white";
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    form.appendChild(statusMessage);
    const formData = new FormData(form);
    //console.log("formData: ", formData);
    let body = {};

    // for (const val of formData.entries) {
    //   body[val[0]] = val[1]
    // }
    formData.forEach((val, key) => {
      //console.log("val: ", val);
      body[key] = val;
    });
    //console.log("body: ", body);

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        statusMessage.textContent = successMessage;
        clearForm();
      })
      .catch(() => {
        statusMessage.textContent = errorMessage;
      });
  });

  const postData = (data) => {
    //console.log(data);
    return fetch("server.php", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });
    // return new Promise((resolve, reject) => {
    //   const request = new XMLHttpRequest();
    //   request.addEventListener("readystatechange", () => {
    //     statusMessage.textContent = loadMessage;
    //     if (request.readyState !== 4) {
    //       return;
    //     }
    //     if (request.status === 200) {
    //       resolve();
    //       clearForm();
    //     } else {
    //       reject(request.status);
    //     }
    //   });
    //   request.open("POST", "server.php");
    //   request.setRequestHeader("Content-Type", "application/json");

    //   request.send(JSON.stringify(data));
    // });
  };

  const clearForm = () => {
    const nameInput = form.querySelector("input[name='user_name']"),
      emailInput = form.querySelector("input[name='user_email']"),
      messageInput = form.querySelector("input[name='user_message']"),
      phoneInput = form.querySelector("input[name='user_phone']");
    //console.log("phoneInput: ", phoneInput.value);
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    if (messageInput) {
      messageInput.value = "";
    }
    //console.log("nameInput: ", nameInput);
  };
  // (messageInput = document.querySelectorAll("input[name='user_message']")),
  // (emailInput = document.querySelectorAll("input[name='user_email']")),
  // (phoneInput = document.querySelectorAll("input[name='user_phone']"));
};

export default sendForm;
