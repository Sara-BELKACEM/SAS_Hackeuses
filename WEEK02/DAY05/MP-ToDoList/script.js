// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Handle adding a task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  // Check if input is not empty
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = ''; // Clear input after adding
  }
});

// Function to add a new task to the list
function addTask(text) {
  // Create <li> element
  const li = document.createElement('li');

  // Create task span
  const taskSpan = document.createElement('span');
  taskSpan.textContent = text;

  // Add click to mark as completed
  taskSpan.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.classList.add('delete-btn');

  // Remove task when delete clicked
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // Append span and delete button to li
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Add li to the task list
  taskList.appendChild(li);
}
