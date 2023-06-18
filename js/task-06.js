const inputEL = document.querySelector('#validation-input');
const expectedLengthEL = inputEL.dataset.length;

inputEL.addEventListener('blur', oninputELCheckText);

function oninputELCheckText(event) {
  if (event.currentTarget.value.length > 0) {
    if (event.currentTarget.value.length === parseInt(expectedLengthEL)) {
      addRemoveClasses(inputEL, 'valid', 'invalid');
    } else {
      addRemoveClasses(inputEL, 'invalid', 'valid');
    }
  } else {
    removeAllClasses(inputEL, 'valid', 'invalid');
  }
}

function addRemoveClasses(ell, addClass, removeClass) {
  ell.classList.add(addClass);
  ell.classList.remove(removeClass);
}

function removeAllClasses(ell, ...classes) {
  classes.forEach(currentClass => ell.classList.remove(currentClass));
}
