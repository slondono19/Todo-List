// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')
// Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions

function addTodo(event){
    event.preventDefault();
    //Todo div

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');

    //Create LI

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add todo to localStorage
    saveLocalTodos(todoInput.value);

    // Check mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

        // Check trash button

    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

        //Append to list
    todoList.appendChild(todoDiv);
    
    document.querySelector('.todo-input').value = '';
}

function deleteCheck(event){

    const item = event.target;

    if(item.classList[0] === 'trash-button' ){

        //animation
        item.parentElement.classList.add('fall');
        removeLocalTodos(item.parentElement);
        item.parentElement.addEventListener('transitionend', function(){
             item.parentElement.remove();

        })
    }

    //Check mark
    if(item.classList[0] === 'complete-button'){
        item.parentElement.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }

function saveLocalTodos(todo){
  //Check Do I already have todos there?

  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];

  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];

  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');

    //Create LI

    const newTodo = document.createElement('li')
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    // Check mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

        // Check trash button

    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

        //Append to list
    todoList.appendChild(todoDiv);

  });
}

function removeLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];

  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}