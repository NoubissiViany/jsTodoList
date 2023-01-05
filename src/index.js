import './styles/styles.css';

const addBtn = document.querySelector('.btn');
const input = document.querySelector('.task');
const displayValue = document.querySelector('.result');
let count = 0;

function displayValues() {
  const result = input.value;
  if (result === '') {
    alert('Please Add a task');
  } else {
    count += 1;
    displayValue.style.visibility = 'initial';
    const todoItem = document.createElement('div');
    todoItem.classList.add('displayItem');
    todoItem.innerHTML = `<input class='radio' type='radio'/> ${result} <i class='fa-solid icon fa-trash-can'></i>`;
    displayValue.appendChild(todoItem);

    todoItem.querySelector('.radio').addEventListener('click', () => {
      todoItem.style.textDecoration = 'line-through';
    });

    todoItem.querySelector('.icon').addEventListener('click', () => {
      todoItem.remove();
      count -= 1;
      if (count < 1) {
        displayValue.style.visibility = 'hidden';
      }
    });

    input.value = '';
  }
}

addBtn.addEventListener('click', () => {
  displayValues();
});
