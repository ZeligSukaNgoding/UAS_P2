document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = ''; // Clear the input
        }
    });

    // Optional: Add functionality to remove tasks
    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.remove();
        }
    });
});