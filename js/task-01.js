// const categoriesElem =
//   document.body.firstElementChild.nextElementSibling.children;
// console.log('Number of categories:', categoriesElem.length);

const categoriesEl = document.querySelector('#categories').children;
console.log('Number of categories:', categoriesElem.length);

[...categoriesEl].forEach(elem =>
  console.log(
    `Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`
  )
);
