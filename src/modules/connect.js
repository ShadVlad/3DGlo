const connect = () => {
  const formInput = document.querySelectorAll("form"),
    nameInput = document.querySelectorAll("input[name='user_name']"),
    messageInput = document.querySelectorAll("input[name='user_message']"),
    emailInput = document.querySelectorAll("input[name='user_email']"),
    phoneInput = document.querySelectorAll("input[name='user_phone']");
  //console.log("formInput: ", formInput);

  const readInputName = (event) => {
    //console.log("nameInput: ", event);
    //while (event.target.value.length < 30) {
    event.target.value = event.target.value.replace(/[^А-Яа-яЁё\s]+$/, "");
    //.slice(30);
    //}
    //return;
  };

  const readInputMessage = (event) => {
    //console.log("nameInput: ", event);
    event.target.value = event.target.value.replace(/[^?!,.а-яА-ЯёЁ0-9]+$/, "");
  };
  const readInputPhone = (event) => {
    //console.log("nameInput: ", event);
    event.target.value = event.target.value.replace(/[^\d\+]/, "");
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
    if (val.length < 2 || val.length > 30) {
      alert("Имя должно содержать от 2 до 30 символов");
      //return;
    }
    val = val.split(/\s+/);
    event.target.value = val
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    // console.log(
    //   "value: ",
    //   val.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    // );
  };

  const fixedText = () => {
    let val = event.target.value.replace(/\-{2,}/g, "-");

    val = val.split(/\s+/);
    val[0] = val[0].charAt(0).toUpperCase() + val[0].slice(1);
    //val.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    event.target.value = val.map((w) => w).join(" ");
  };
  const fixedPhone = () => {
    let val = event.target.value.replace(/[^\d\+]/, "");

    if (val.length < 7 || val.length > 12) {
      alert(
        "Номер телефона должен содержать от 7 до 12 символов с учетом плюса!"
      );
    } //console.log("val: ", val.length);

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
    //console.log("event: ", val);
  };
  formInput.forEach((item) => {
    item.addEventListener("keyup", (event) => {
      if (event.target.matches("input[name='user_name']")) {
        //console.log("event.target: ", event.target);
        readInputName(event);
        if (event.target.value.length > 30) {
          alert("Имя должно содержать от 2 до 30 символов");
          event.target.value = event.target.value.slice(0, 30);
          //console.log("event.target.value: ", event.target.value);
          return;
        }
        //event.target.addEventListener("blur", correct);
      } else if (event.target.matches("input[name='user_message']")) {
        readInputMessage(event);
      } else if (event.target.matches("input[name='user_email']")) {
        readInputEmail(event);
      } else if (event.target.matches("input[name='user_phone']")) {
        readInputPhone(event);
        if (event.target.value.length > 12) {
          alert(
            "Номер телефона должен содержать от 7 до 12 символов с учетом плюса!"
          );
          event.target.value = event.target.value.slice(0, 12);
          //console.log("event.target.value: ", event.target.value);
          return;
        }
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
      let val = event.target.value;
      //
      //   readInputPhone(event);
      // } //console.log("event.target: ", event.target);
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

export default connect;
