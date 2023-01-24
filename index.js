let minutes = 00;
let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("secs");
let appendMinutes = document.getElementById("mins");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
let interval; // to store timer values

// this function will run when click on start

function startTimer() {
  tens++;

  
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if(seconds > 59){
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if(minutes > 9){
    appendMinutes.innerHTML = minutes;
  }
}

buttonStart.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
  appendMinutes.innerHTML = minutes;
};
