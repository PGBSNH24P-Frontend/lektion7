const todosList = document.getElementById("todos-list");
const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("title-input");
const completedInput = document.getElementById("completed-input");

class Todo {
    constructor(title, completed) {
        this.title = title;
        this.completed = completed;
    }
}

function getTodosFromLocalStorage() {
    const todosItem = localStorage.getItem("todos");
    if (todosItem === null) {
        return [];
    }

    return JSON.parse(todosItem);
}

function saveTodoToLocalStorage(todo) {
    const todos = getTodosFromLocalStorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
    todosList.innerHTML = "";

    const todos = getTodosFromLocalStorage();
    for (const todo of todos) {
        const li = document.createElement("li");

        li.innerText = todo.title + " " + (todo.completed ? "done" : "todo");

        todosList.append(li);
    }
}

function main() {
    renderTodos();

    submitButton.addEventListener('click', () => {
        const todo = new Todo(titleInput.value, completedInput.checked);
        saveTodoToLocalStorage(todo);
        titleInput.value = "";
        completedInput.checked = false;
        renderTodos();
    });
}

main();
