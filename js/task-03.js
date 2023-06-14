const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const cssCode = `
.gallery {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}`;

galleryEl.insertAdjacentHTML(
  'beforeend',
  images
    .map(
      ({ url, alt }) =>
        `<li class="gallery-item"><img src="${url}" alt="${alt}" width=500></li>`
    )
    .join('')
);
// !!ТАК ЯК У вказано наступне: "не можна змінювати вихідний HTML завдання"
// !!я вирішив додати інлайново

// galleryEl.style.listStyleType = 'none';
// galleryEl.style.display = 'flex';
// galleryEl.style.flexWrap = 'wrap';
// galleryEl.style.gap = '10px';

galleryEl.insertAdjacentHTML('beforeend', `<style>${cssCode}</style>`);
