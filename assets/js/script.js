//-------------------------------------------------------------VARIABLES
// var buttonEl = document.querySelector("#save-task");

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    event.preventDefault();
    // console.log(event); use this to get info on the event
    
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task!";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
};

// buttonEl.addEventListener("click",createTaskHandler);
formEl.addEventListener("submit", createTaskHandler);