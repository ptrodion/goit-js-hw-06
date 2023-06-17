const inputEl = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output');
const originalTextSpanEL = spanEL.textContent;

inputEl.addEventListener('input', onInputEnterName);

function onInputEnterName(event) {
  event.currentTarget.value
    ? (spanEL.textContent = event.currentTarget.value)
    : (spanEL.textContent = originalTextSpanEL);
}
