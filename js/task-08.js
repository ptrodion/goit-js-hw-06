const loginFormEl = document.querySelector('.login-form');
loginFormEl.addEventListener('submit', onSendLoginForm);

function onSendLoginForm(event) {
  event.preventDefault();

  const newData = {};
  const data = new FormData(event.currentTarget);
  const { email, password } = event.currentTarget.elements;

  if (!(email.value.trim() && password.value.trim())) {
    return alert(`All fields must be filled.`);
  }

  data.forEach((value, key) => {
    newData[key] = value;
  });
  console.log(newData);

  event.currentTarget.reset();
}
