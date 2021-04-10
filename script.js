// Ссылки
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bttn = {
  StartRef: document.getElementById('start'),
  StopRef: document.getElementById('stop'),
};
let stopInt = false;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Добавление слушателей
bttn.StartRef.addEventListener('click', () => {
  bgrColor.start();
});
bttn.StopRef.addEventListener('click', () => {
  bgrColor.stop();
});

// Функции
const bgrColor = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = `${
        colors[randomIntegerFromInterval(0, colors.length)]
      }`;
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};
