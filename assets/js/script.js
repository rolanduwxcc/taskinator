//-------------------------------------------------------------VARIABLES
// var buttonEl = document.querySelector("#save-task");

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div element to hold task infor and add to list item vs li element
    //AND give taskInfoEl a class name
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>"; 
    listItemEl.appendChild(taskInfoEl);

    // var taskItemEl = document.createElement("li");
    // taskItemEl.textContent = taskNameInput;
    // taskItemEl.className = "task-item";
    // tasksToDoEl.appendChild(taskItemEl);

    // add entire list itme to list
    tasksToDoEl.appendChild(listItemEl);
    // console.dir(listItemEl);
};

// buttonEl.addEventListener("click",createTaskHandler);
formEl.addEventListener("submit", createTaskHandler);