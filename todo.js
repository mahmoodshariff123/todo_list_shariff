// Function to add a task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        li.innerHTML += '<button onclick="completeTask(this)">Complete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

// Function to mark a task as completed
function completeTask(button) {
    var li = button.parentElement;
    li.classList.add("completed");
    button.textContent = "Delete";
    button.setAttribute("onclick", "deleteTask(this)");
}

// Function to delete a task
function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
}
