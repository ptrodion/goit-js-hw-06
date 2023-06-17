const inputEL = document.querySelector('#validation-input');
const expectedLengthEL = inputEL.dataset.length;

inputEL.addEventListener('blur', oninputELCheckText);

function oninputELCheckText(event) {
  if (event.currentTarget.value.length > 0) {
    if (event.currentTarget.value.length === parseInt(expectedLengthEL)) {
      inputEL.classList.add('valid');
      inputEL.classList.remove('invalid');
    } else {
      inputEL.classList.add('invalid');
      inputEL.classList.remove('valid');
    }
  } else {
    inputEL.classList.remove('invalid');
    inputEL.classList.remove('valid');
  }
}
