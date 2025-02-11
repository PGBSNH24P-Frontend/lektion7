const todosList = document.getElementById("todos-list");
const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("title-input");
const completedInput = document.getElementById("completed-input");

let todos = [];

class Todo {
    constructor(todo, completed) {
        this.todo = todo;
        this.completed = completed;
    }
}

function renderTodos() {
    todosList.innerHTML = "";

    for (const todo of todos) {
        const li = document.createElement("li");

        li.innerText = todo.todo + " " + (todo.completed ? "done" : "todo");

        todosList.append(li);
    }
}

async function fetchTodosFromDummyJson() {
    const response = await fetch('https://dummyjson.com/todos');
    return await response.json();
}

async function addTodoToDummyJson(todo) {
    const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });

    return await response.json();
}

function main() {
    fetchTodosFromDummyJson().then(res => {
        todos = res.todos;
        console.log(res);
        console.log(todos);
        renderTodos();
    });

    submitButton.addEventListener('click', () => {
        const todo = new Todo(titleInput.value, completedInput.checked);
        addTodoToDummyJson(todo).then(res => {
            todos.push(res);

            titleInput.value = "";
            completedInput.checked = false;
            renderTodos();
        });
    });
}

main();
