const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value;
    if (taskText) {
        const listItem = document.createElement("li");
        listItem.innerText = taskText;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});