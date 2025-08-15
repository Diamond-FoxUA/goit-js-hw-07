const MAX_COLOR_VALUE = 16777215;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * MAX_COLOR_VALUE)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}

const body = document.querySelector('body');
const colorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

colorBtn.addEventListener('click', changeBackgroundColor);