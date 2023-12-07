const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector("button");

btn.addEventListener("click", addTask);
listContainer.addEventListener("click", handleListClick);

function addTask() {
    const inputValue = inputBox.value.trim();
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        createTask(inputValue);
    }
    inputBox.value = "";
    saveData();
}

function createTask(taskText) {
    let li = document.createElement("li");
    li.innerHTML = taskText;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
    listContainer.appendChild(li);
}

function handleListClick(e) {
    if (e.target.tagName === "LI") {
        toggleTask(e.target);
    } else if (e.target.tagName === "SPAN") {
        deleteTask(e.target.parentElement);
    }
    saveData();
}

function toggleTask(task) {
    task.classList.toggle("checked");
}

function deleteTask(task) {
    task.remove();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
