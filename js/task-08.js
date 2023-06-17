const loginFormEl = document.querySelector('.login-form');
loginFormEl.addEventListener('submit', onSendLoginForm);

function onSendLoginForm(event) {
  event.preventDefault();

  const newData = {};
  const data = new FormData(event.currentTarget);

  data.forEach((value, key) => {
    if (value === '') {
      alert(`All fields must be filled. Fill in the field ${key}`);
    } else {
      newData[key] = value;
    }
  });

  console.log(newData);
  event.currentTarget.reset();
}
