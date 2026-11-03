const container = document.querySelector(".container");
const secHand = document.querySelector(".sec");
const secUp = document.querySelector(".secUp");
const minHand = document.querySelector(".min");
const minUp = document.querySelector(".minUp");
const hourHand = document.querySelector(".hour");
const hourUp = document.querySelector(".hourUp");

console.log(secUp);
// Make number boxes
for (let i = 0; i < 6; i++) {
  const box = document.createElement("div");
  box.className = "box";
  container.append(box);
  const up = document.createElement("div");
  up.className = "up";
  const bottom = document.createElement("div");
  bottom.className = "bottom";
  box.append(up);
  box.append(bottom);
  if (i == 0) {
    up.textContent = "12";
  } else {
    up.textContent = i;
  }
  bottom.textContent = i + 6;

  box.style.transform = `rotateZ(${30 * i}deg)`;
  up.style.transform = `rotateZ(${-30 * i}deg)`;
  bottom.style.transform = `rotateZ(${-30 * i}deg)`;
}

//tick lines
for (let i = 0; i < 60; i++) {
  const tick = document.createElement("div");
  tick.className = "tick";
  container.append(tick);

  const tickup = document.createElement("div");
  tickup.className = "tickup";
  const tickbottom = document.createElement("div");
  tickbottom.className = "tickbottom";
  tick.append(tickup);
  tick.append(tickbottom);

  tick.style.transform = `rotateZ(${6 * i}deg)`;

  if (i % 5 == 0) {
    tickup.style.height = "10px";
    tickbottom.style.height = "10px";

    tickup.classList.add("special");
    tickbottom.classList.add("special");
  }
}

function secMove(sec) {
  secHand.style.transform = `rotateZ(${6 * sec}deg)`;
  if (sec >= 22 && sec <= 52) {
    secUp.style.boxShadow = "-3px -3px 3px rgba(0, 0, 0, 0.5)";
  }
}

function minMove(min, sec) {
  const secDegree = 0.1 * sec;
  minHand.style.transform = `rotateZ(${6 * min + secDegree}deg)`;
  if (min >= 22 && min <= 52) {
    minUp.style.boxShadow = "-3px -3px 3px rgba(0, 0, 0, 0.5)";
  }
}

function hourMove(hour, min) {
  const minDegree = 0.5 * min;
  if (hour >= 12) {
    hour = hour - 12;
  }
  hourHand.style.transform = `rotateZ(${30 * hour + minDegree}deg)`;
  if (hour >= 4 && hour <= 10) {
    hourUp.style.boxShadow = "-3px -3px 3px rgba(0, 0, 0, 0.5)";
  }
}

/* //current time */
// initial
const current = new Date();
const sec = current.getSeconds();
const min = current.getMinutes();
const hour = current.getHours();
secMove(sec);

setInterval(() => {
  const current = new Date();
  const sec = current.getSeconds();
  const min = current.getMinutes();
  const hour = current.getHours();
  secMove(sec);
  minMove(min, sec);
  hourMove(hour, min);
}, 1000);
