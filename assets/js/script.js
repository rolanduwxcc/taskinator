//-------------------------------------------------------------VARIABLES
// var buttonEl = document.querySelector("#save-task");

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//--------------------------------------------------------------FUNCTIONS
var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    //clear the form if successful submit
    formEl.reset();

    //package data into an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput,
    };

    //send object as an arguement
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div element to hold task infor and add to list item vs li element
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"; 
    
    listItemEl.appendChild(taskInfoEl);

    // add entire list itme to list
    tasksToDoEl.appendChild(listItemEl);
    // console.dir(listItemEl);    
};

//---------------------------------------------------------------EVENT LISTENERS
formEl.addEventListener("submit", taskFormHandler);