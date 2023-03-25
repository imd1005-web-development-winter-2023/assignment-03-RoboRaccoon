//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
const appID = "app";
const tasks = [
  // tests
  // 1,2,3 
  {
  text: "Task 0",
  isDone: false,
  }
];

const dones = [
  {
    text: "",
    isDone: true,
  }
]

// allows us to select items from html
const taskList = document.querySelector(".task-list"); // get task list
const form = document.querySelector(".add-task-form"); // get form
const inputBox = document.querySelector("#task-name");  // get name
const deleteAllTasksButton = document.querySelector(".delete-all-tasks"); // get the delete tasks button

const doneList = document.querySelector(".done-list"); // get done list
const deleteAllDoneButton = document.querySelector(".delete-all-done"); // get the delete button

taskList.classList.add("className");
console.log(taskList);

//  const headingText = "To do. To done. ✅";

// Variables

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

// prints the task list
// needs to be called each time we update list to reprint it
function renderList() {
   // Clear all task in list
   while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // add the new tasks
  for (let i = 0; i < tasks.length; i++) {
    // create each list item
    const taskListItem = document.createElement("li");
    // print the contents of list
    //taskListItem.textContent = tasks[i].text + " "; //+ tasks[i].isDone; // we'll show it's done some other way

    // create delete button for each item
    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";
    deleteTask.dataset.index = i;

    // the done button
    const doneTask = document.createElement("text");
    doneTask.textContent = tasks[i].text;
    doneTask.dataset.index = i;

    // appendChild just means to add it
    taskList.prepend(taskListItem); // preped add new items before
    taskListItem.appendChild(doneTask); // append add new items after
    taskListItem.appendChild(deleteTask);
  }

  // clear form so text field is empty
  form.reset();

}

// prints the done list
// needs to be called each we update done list
function renderDone() {
  // Clear all tasks
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }

  // add the new done tasks
  for (let i = 0; i < dones.length; i++) {
    // create each list item
    const doneListItem = document.createElement("li");
    // print the contents of list
    doneListItem.textContent = dones[i].text; 

    // create delete button for each item
    const deleteDone = document.createElement("button");
    deleteDone.textContent = "Delete";
    deleteDone.dataset.index = i;

    // appendChild just means to add it
    doneList.prepend(doneListItem);
    doneListItem.appendChild(deleteDone);
  }
}

// add a taks to the list
function addItem(event) {
  event.preventDefault();

  const newTask = inputBox.value;

  tasks.push({
    text: newTask,
    isDone: false,
  });

  console.log("Name of New Task:", newTask);

  console.log(tasks);

  // print updated list
  renderList();
}

// add a taks to the list
function addDone(event, taskName) {
  event.preventDefault();

  const newDone = taskName;

  dones.push({
    text: newDone,
    isDone: true,
  });

  console.log("Name of New Task:", newDone);

  console.log(dones);

  // print updated list
  renderDone();
}

// makes it so that we can delete individual tasks
function handleDeleteTask(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  var indexToDelete = event.target.dataset.index;

  tasks.splice(indexToDelete, 1);

  console.log(tasks);

  renderList();
}

// makes it so that we can delete individual tasks
function handleDoneTask(event) {
  if (event.target.nodeName !== "TEXT") {
    return;
  }

  var indexDone = event.target.dataset.index;

  // trying to figure out how to just pass the text from task array xD
  console.log(tasks[indexDone].text);
  addDone(event, tasks[indexDone].text);

  console.log("is done", tasks);

  // delete it afer it's moved
  tasks.splice(indexDone, 1);

  renderList();
}

// makes it so that we can delete individual tasks
function handleDeleteDone(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  var indexToDelete = event.target.dataset.index;

  dones.splice(indexToDelete, 1);

  console.log(dones);

  renderDone();
}

// delete all tasks by setting the array length to 0
function deleteAllTasks(event) {
  tasks.length = 0;
  console.log("Delete all was clicked");
  renderList();
}

// delete all dones
function deleteAllDones(event) {
  dones.length = 0;
  renderDone();
}

//
// Inits & Event Listeners
//

// we don't want a heading to the app container 
//inititialise();

// refresh list
 renderList();
 renderDone();
// add event listener to form
form.addEventListener("submit", addItem);
// add event listener to button
taskList.addEventListener("click", handleDeleteTask);
taskList.addEventListener("click", handleDoneTask);
// add envent listener for the "Delete All" tasks button
deleteAllTasksButton.addEventListener("click", deleteAllTasks);

// add event listener for the done list
doneList.addEventListener("click", handleDeleteDone);
deleteAllDoneButton.addEventListener("click", deleteAllDones); 