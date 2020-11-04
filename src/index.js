const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

startBtn = document.querySelector("[data-action='start']");
stopBtn = document.querySelector("[data-action='stop']");

console.log(startBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



startBtn.addEventListener('click', onBtnClick);