//-------------------------------------------------------------VARIABLES
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");

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

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    //create div element to hold task infor and add to list item vs li element
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>"; 
    
    listItemEl.appendChild(taskInfoEl);

    //get task actions to add in
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    // add entire list item to list on the page
    tasksToDoEl.appendChild(listItemEl);
    // console.dir(listItemEl);    

    // increas teh task counter for next unique id
    taskIdCounter++;
};

var createTaskActions = function(taskId) {
    var actionContainterEl = document.createElement("div");
    actionContainterEl.className = "task-actions";

    //Edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);
    actionContainterEl.appendChild(editButtonEl);

    //Delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);
    actionContainterEl.appendChild(deleteButtonEl);

    //Task status selection
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    actionContainterEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (let i = 0; i < statusChoices.length; i++) {
        const element = statusChoices[i];
        
        //create an task status option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = element
        statusOptionEl.setAttribute("value", element);
        
        //append each status to the select
        statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainterEl;
};

var taskButtonHandler = function(event) {
    // console.log(event.target); //logs what object triggered event

    if (event.target.matches(".delete-btn")) {
        var taskId = event.target.getAttribute("data-task-id");
        deleteTask(taskId);
    }

};

var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
};

//---------------------------------------------------------------EVENT LISTENERS
formEl.addEventListener("submit", taskFormHandler);
pageContentEl.addEventListener("click", taskButtonHandler);