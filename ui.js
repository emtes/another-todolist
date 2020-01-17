class UI {
    constructor() {
        this.tbody = document.getElementById('todoInbox');
        this.dueDateInput = document.getElementById('task_date');
        this.taskInput = document.getElementById('task_desc');
    }
    paintTable() {
        for (const todo of Object.values(list.tasks)) {
            let row = document.createElement('tr');
            row.innerHTML = `
            <td>${todo.task}</td>
            <td>${todo.dueDate.toLocaleString()}</td>
            <td>INSERT_COMPLETE_CHECK</td>
            <td>INSERT DELETE</td>
            `;
            this.tbody.appendChild();
        }
    }
}
