var selectedPriority = ""; 
function toggleDropdown() {
  var dropdownContent = document.getElementById("priority-dropdown");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}
function selectPriority(priority) {
  selectedPriority = priority;
  document.querySelector('.selected-option').textContent = priority;
  toggleDropdown(); 
}
function addTask() {
  var taskValue = document.getElementById("task-input").value;
  var priorityValue = selectedPriority;
  var deadlineValue = document.getElementById("deadline-input").value;
  if (taskValue.trim() === "" || priorityValue.trim() === "" || deadlineValue.trim() === "") {
    alert("Please enter task, priority, and deadline.");
    return;
  }
    var taskRow = document.createElement("div");
    taskRow.classList.add("row", "output-row");
    taskRow.innerHTML = "Task  : " + taskValue + "<br>Priority  : " + priorityValue + "<br>Deadline : " + deadlineValue;
var doneButton = document.createElement("button");
doneButton.innerText = "Done";
doneButton.onclick = function () {
    taskRow.remove();
};
taskRow.appendChild(doneButton);
    var addButtonContainer = document.querySelector('.add-button-container');
    addButtonContainer.insertAdjacentElement('afterend', taskRow);
  document.getElementById("task-input").value = "";
  document.querySelector('.selected-option').textContent = "Select priority";
  selectedPriority = "";
  document.getElementById("deadline-input").value = "";
}