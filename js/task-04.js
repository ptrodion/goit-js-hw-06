let counterValue = 0;

const refs = {
  currentCounterValue: document.querySelector('#value'),
  increaseEL: document.querySelector('[data-action="increment"]'),
  decreaseEl: document.querySelector('[data-action="decrement"]'),
};

const onIncrementClick = () => {
  refs.currentCounterValue.textContent = counterValue += 1;
};
const onDecrementClick = () => {
  refs.currentCounterValue.textContent = counterValue -= 1;
};

refs.increaseEL.addEventListener('click', onIncrementClick);
refs.decreaseEl.addEventListener('click', onDecrementClick);
