const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Функция для добавления задачи в локальное хранилище и отображения ее на странице
function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.innerText = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";

    // Сохранение задачи в локальном хранилище
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// При загрузке страницы, загрузите сохраненные задачи из локального хранилища
window.addEventListener("load", function() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = ""; // Очистить список задач перед добавлением
    tasks.forEach(function(task) {
        addTask(task);
    });
});


addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText);
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();

        // Удаление задачи из локального хранилища
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const taskText = event.target.innerText;
        const index = tasks.indexOf(taskText);
        if (index !== -1) {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
});