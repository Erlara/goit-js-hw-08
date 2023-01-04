import throttle from 'lodash.throttle';

 const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onClickButton);

 const KEY_LOCAL = 'feedback-form-state';

saveInput();

function onInput(e) {
  const user = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  }
  localStorage.setItem(KEY_LOCAL, JSON.stringify(user));

  JSON.parse(localStorage.getItem(KEY_LOCAL))[e.target.name] = e.target.value;
  }

function saveInput() {
  const savedMessage = localStorage.getItem(KEY_LOCAL);
  if (savedMessage) {
    formEl.elements.email.value = JSON.parse(savedMessage).email || '';
    formEl.elements.message.value = JSON.parse(savedMessage).message || '';
  }
}

function onClickButton(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY_LOCAL)));
  e.currentTarget.reset();
  localStorage.removeItem(KEY_LOCAL);
  
}
