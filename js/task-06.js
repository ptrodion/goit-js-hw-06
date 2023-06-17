const refs = {
  inputEL: document.querySelector('#validation-input'),
  expectedLengthEL: inputEL.dataset.length,
};

inputEL.addEventListener('blur', oninputELCheckText);

function oninputELCheckText(event) {
  if (event.currentTarget.value.length > 0) {
    if (event.currentTarget.value.length === parseInt(refs.expectedLengthEL)) {
      refs.inputEL.classList.add('valid');
      refs.inputEL.classList.remove('invalid');
    } else {
      refs.inputEL.classList.add('invalid');
      refs.inputEL.classList.remove('valid');
    }
  } else {
    refs.inputEL.classList.remove('invalid');
    refs.inputEL.classList.remove('valid');
  }
}
