const elementChildrens = document.querySelector('#categories').children.length;

console.log(`'В списке ${elementChildrens} категории.'`);

const categoriesItem = elementChildrens.child;
console.log(categoriesItem);

const textCategoriesItem = document.querySelector('h2').textContent;
console.log(`Категория: ${textCategoriesItem}`);

const elementCategoriesItem = document.querySelector('.item').lastElementChild
  .children.length;
console.log(`Количество элементов: ${elementCategoriesItem}`);
