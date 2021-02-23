const elementChildrens = document.querySelector('#categories').children.length;
console.log(`В списке ${elementChildrens} категории.`);

const categoriesItem = document.querySelectorAll('.item');

for (let item of categoriesItem) {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
}
