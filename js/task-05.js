const refs = {
  inputEl: document.querySelector('#name-input'),
  spanEL: document.querySelector('#name-output'),
  originalTextSpanEL: spanEL.textContent,
};

refs.inputEl.addEventListener('input', onInputEnterName);

function onInputEnterName(event) {
  event.currentTarget.value
    ? (refs.spanEL.textContent = event.currentTarget.value)
    : (refs.spanEL.textContent = refs.originalTextSpanEL);
}
