var seconds = 0;
var minutes = 0;
var hours = 0;
var el = document.getElementById("seconds-counter");
var el2 = document.getElementById("minutes-counter");
var el3 = document.getElementById("hours-counter");
function incrementSeconds() {
  seconds += 1;
  if (seconds === 60) {
    return seconds = 0;
  }
  el.innerText = seconds;
}
var cancel = setInterval(incrementSeconds, 1000);

function incrementMinutes() {
  minutes += 1;
  if (minutes === 60) {
    return minutes = 0;
  }
  el2.innerText = minutes;
}
var cancel = setInterval(incrementMinutes, 60000);

function incrementHours() {
  hours += 1;
  if (hours === 12) {
    return hours = 0;
  }
  el3.innerText = hours;
}
var cancel = setInterval(incrementHours, 3600000);
