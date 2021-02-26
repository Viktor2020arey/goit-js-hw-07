{
  /* <input type="text" placeholder="Ваше имя?" id="name-input" /> */
}
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
}
