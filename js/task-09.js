function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.body,
  buttonEl: document.querySelector('.change-color'),
  colorSpanEL: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onClickButtonChangeColor);

function onClickButtonChangeColor() {
  const randomColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomColor;
  refs.colorSpanEL.textContent = randomColor;
}
