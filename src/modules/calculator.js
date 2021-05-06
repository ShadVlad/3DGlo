const calculator = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block"),
    calcType = document.querySelector(".calc-type"),
    calcSquare = document.querySelector(".calc-square"),
    calcDay = document.querySelector(".calc-day"),
    calcCount = document.querySelector(".calc-count"),
    totalValue = document.getElementById("total"),
    summInput = document.querySelectorAll(".calc-item");

  //console.log("totalValue: ", totalValue.textContent);
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

    totalValue.textContent = total;
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
};

export default calculator;
