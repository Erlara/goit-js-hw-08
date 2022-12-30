import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onClickButton);

const KEY_LOCAL = 'feedback-form-state';
const obj = localStorage.getItem(KEY_LOCAL);
const parsedObj = JSON.parse(obj);

saveInput();

function onInput(e) {
  localStorage.setItem(
    KEY_LOCAL,
    JSON.stringify({
      email: formEl.elements.email.value,
      message: formEl.elements.message.value,
    })
  );

  parsedObj[e.target.name] = e.target.value;
}

function saveInput() {
  if (obj) {
    formEl.elements.email.value = parsedObj.email || '';
    formEl.elements.message.value = parsedObj.message || '';
  }
}

function onClickButton(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(KEY_LOCAL);
  console.log(parsedObj);
}
