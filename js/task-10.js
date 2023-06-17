function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  createEl: document.querySelector('[data-create]'),
  destroyEl: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};

// CREATE
const primaryValueSize = 30;

refs.createEl.addEventListener('click', onCreateNewElements);

function onCreateNewElements(event) {
  createBoxes(refs.inputEl.value);
}

function createBoxes(amount) {
  const newArray = [];
  for (let i = 0; i < amount; i += 1) {
    newArray[i] = i;
  }

  const addElements = newArray
    .map(elem => {
      if (elem === 0) {
        return `<div style="width:${primaryValueSize}px; height:${primaryValueSize}px; background-color: ${getRandomHexColor()}"></div>`;
      } else {
        return `<div style="width:${primaryValueSize + elem * 10}px; height:${
          primaryValueSize + elem * 10
        }px; background-color: ${getRandomHexColor()}"></div>`;
      }
    })
    .join('');

  refs.boxEl.insertAdjacentHTML('beforeend', addElements);
}

//  DESTROY

refs.destroyEl.addEventListener('click', onDestroyNewElements);

function onDestroyNewElements() {
  destroyBoxes();
}

function destroyBoxes() {
  refs.boxEl.innerHTML = '';
}
