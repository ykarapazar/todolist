const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let input = document.getElementById("todo-input")


function newTodo() {
  alert('New TODO button clicked!')
  alert(input.value)
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value))
  console.log = (li.textContent)
  list.appendChild(li);
  var removebutton = document.createElement("button");
  li.appendChild(document.createElement(removebutton));
  //list.appendChild(inputtext)
}
