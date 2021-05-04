// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// Event listeners

todoButton.addEventListener('click', addTodo);
// Functions

function addTodo(event){
    event.preventDefault();
    //Todo div

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');

    //Create LI

    const newTodo = document.createElement('li')
    newTodo.innerText = document.querySelector('.todo-input').value;
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
    
    document.querySelector('.todo-input').value = '';
}