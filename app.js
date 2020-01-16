const list = new TodoList()
const form = document.getElementById('addTodo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskDesc = document.getElementById('task_desc');
    const dueDate = document.getElementById('task_date');
    list.addTask(taskDesc.value, dueDate.value);

    const todoInbox = document.getElementById('todoInbox');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${taskDesc.value}</td>
    <td>${dueDate.value}</td>
    <td>Complete</td>
    <td>Delete</td>
    `;
    todoInbox.appendChild(tr);
});
