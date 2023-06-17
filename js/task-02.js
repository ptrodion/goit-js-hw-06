const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const mainListEl = document.querySelector('#ingredients');

const item = ingredients.map(ingredient => {
  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.textContent = ingredient;
  return createLi;
});
mainListEl.append(...item);
