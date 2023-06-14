const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
const increaseEL = document.querySelector('[data-action="increment"]');
const decreaseEl = document.querySelector('[data-action="decrement"]');

const increaseHandleClick = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
};
const decreaseHandleClick = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
};

increaseEL.addEventListener('click', increaseHandleClick);
decreaseEl.addEventListener('click', decreaseHandleClick);
