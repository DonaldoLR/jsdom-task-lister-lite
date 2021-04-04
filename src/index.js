document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const todoArray = [];

  const submitButton = document.getElementById('submitTodoButton');

  //Returns the UL where the list will be placed
  const tasksArea = document.getElementById('tasks');
  

  submitButton.addEventListener('click', function(e){
    const taskInput = document.getElementById('new-task-description');
    const createLi = document.createElement('li');

    e.preventDefault();

    if (taskInput.value === ''){
      return alert('Nothing was inputted');
    } else {
      todoArray.push(taskInput.value);
      
      
      tasksArea.appendChild(createLi);
      createLi.innerHTML = taskInput.value;

      taskInput.value = '';
    }
    
    
  })





});
