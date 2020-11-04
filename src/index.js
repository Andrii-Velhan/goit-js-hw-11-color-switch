import { startBtn, stopBtn, bodyEl } from './modules/variables';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
let bodyColor = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0,  colors.length - 1)];
  }, 1000);
    startBtn.setAttribute("disabled", "true");
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
    startBtn.removeAttribute("disabled");
    bodyEl.style.backgroundColor = bodyColor;
});
