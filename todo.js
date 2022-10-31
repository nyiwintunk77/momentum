const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const todoInput = document.querySelector('#todoForm input');

todoForm.addEventListener('submit', handleSubmit);

let todos = [];

const savedTodos = localStorage.getItem('todos');
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);
    todos = parsedTodos;
}

function handleSubmit(e) {
    e.preventDefault();
    const newTodoObj = {
        id: Date.now(),
        text: todoInput.value,
        checked: false
    }
    todoInput.value = '';


    paintTodo(newTodoObj);
    todos.push(newTodoObj);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function paintTodo(todo) {
    const todoItem = document.createElement('li');
    todoItem.id = todo.id;
    const todoSpan = document.createElement('input');
    todoSpan.type="text";
    todoSpan.value = todo.text;
    todoSpan.onchange=function(e){
        edit(todo.id,e.target.value);
    };
    const deleteButton = document.createElement('button');
    const checkButton = document.createElement('input');
    checkButton.type = 'checkbox';
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        todos = todos.filter((todo) => todo.id !== parseInt(li.id));
        localStorage.setItem('todos', JSON.stringify(todos));
        li.remove();
    });
    
    // checkButton.innerText = todo.checked ? '✅' : '🟩';
    todoSpan.classList.toggle(todo.checked  ? "checked" : "unchecked");
    checkButton.addEventListener('click', (e) => {
        e.preventDefault();
        const check = e.target.parentElement;
        todos = todos.map((todo) => todo.id === parseInt(check.id)
            ? { ...todo, checked: !todo.checked } : todo)
        localStorage.setItem('todos', JSON.stringify(todos));      
        todoSpan.classList.toggle(todos.checked=true ? "checked" : "unchecked");     
    });

    todoItem.appendChild(checkButton);
    todoItem.appendChild(todoSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

}

function edit(id,text){
    console.log(text);
    todos = todos.map((todo)=>todo.id === parseInt(id)
        ? {...todo, text:text}:todo)
    localStorage.setItem('todos', JSON.stringify(todos));
}