const list = new TodoList()
const ui = new UI()
const form = document.getElementById('addTodo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Add Todo instance to our TodoList object
    const taskDesc = document.getElementById('task_desc');
    const dueDate = document.getElementById('task_date');
    list.addTask(taskDesc.value, dueDate.value);

    // Create table from updated task list data
    ui.clearTable();
    ui.paintTable();

    // Clear 'Task' and 'Due Date' inputs
    ui.clearInputs();
});

const deleteForms = document.getElementsByClassName('deleteForm');
for (const button of deleteForms) {
    button.addEventListener('submit', (e) => {
        e.preventDefault();
        list.deleteTask(deleteForms[0].id);
    });
}
