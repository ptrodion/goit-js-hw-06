const refs = {
  fontSizeControlEl: document.querySelector('#font-size-control'),
  textSpanEl: document.querySelector('#text'),
};

refs.fontSizeControlEl.addEventListener('change', onInputChangeValue);

function onInputChangeValue(event) {
  let fonSize = refs.fontSizeControlEl.value + 'px';
  refs.textSpanEl.style.fontSize = fonSize;
}
