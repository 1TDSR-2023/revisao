const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const tasks = [];

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = '';
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement('li');
        li.textContent = tasks[i];
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => removeTask(i));
        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
}

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

renderTasks();