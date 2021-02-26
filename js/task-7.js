const refs = {
  range: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};
refs.range.addEventListener('input', onTextSpanChanger);

function onTextSpanChanger(event) {
  refs.span.style.fontSize = event.currentTarget.value + 'px';
}
