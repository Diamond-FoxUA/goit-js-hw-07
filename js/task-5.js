function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
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