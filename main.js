//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
const appID = "app";
const tasks = [1,2,3];

const taskList = document.querySelector(".task-list"); // get list
const form = document.querySelector(".add-task-form"); // get form
const inputBox = document.querySelector("#task-name");  // get name

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

// prints the list
// needs to be called each time we update list to reprint it
function renderList() {
   // Clear all task in list
   while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  for (let i = 0; i < list.length; i++) {
    const taskListItem = document.createElement("li");
    taskListItem.textContent = list[i].text + " " + list[i].isDone;

    const todoListButton = document.createElement("button");
    todoListButton.textContent = "Delete";

    todoListButton.dataset.index = i;

    taskListItem.appendChild(todoListButton);

    taskList.appendChild(taskListItem);
  }
}

//
// Inits & Event Listeners
//

// we don't want a heading to the app container 
//inititialise();
