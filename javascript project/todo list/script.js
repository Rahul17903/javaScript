document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    
    if (task) {
      addTaskToList(task);
      taskInput.value = '';
    }
  });
  
  function addTaskToList(task) {
    let taskList = document.getElementById('taskList');
    
    // Create list item
    let li = document.createElement('li');
    li.textContent = task;
    
    // Edit button
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', function() {
      let newTask = prompt('Edit Task', task);
      if (newTask) {
        li.firstChild.textContent = newTask;
      }
    });
    
    // Delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(li);
    });
    
    // Append buttons to list item
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    // Append list item to task list
    taskList.appendChild(li);
  }
  