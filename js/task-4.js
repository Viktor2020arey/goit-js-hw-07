const counterValueEl = document.querySelector('#value');

const buttonEl = document.querySelectorAll('button');

let counterValue = 0;

const clickDecrementButton = buttonEl[0].addEventListener('click', decrement);

const clickIncrementButton = buttonEl[1].addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
