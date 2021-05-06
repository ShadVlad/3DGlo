function countTimer(deadline) {
  let timerHours = document.querySelector("#timer-hours"),
    timerMinutes = document.querySelector("#timer-minutes"),
    timerSeconds = document.querySelector("#timer-seconds");

  function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = dateStop - dateNow > 0 ? (dateStop - dateNow) / 1000 : 0,
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

export default countTimer;
