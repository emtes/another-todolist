class UI {
    constructor() {
        this.tbody = document.getElementById('todoInbox');
        this.dueDateInput = document.getElementById('task_date');
        this.taskInput = document.getElementById('task_desc');
    }

    paintTable() {
        for (const todo of Object.values(list.tasks)) {
            let row = document.createElement('tr');

            let deleteBtn = `
                <form class="deleteForm">
                    <input type="submit" value="DELETE TASK"
                    class="button button-clear"
                    id=${todo.taskId}>
                </form>
            `;

            row.innerHTML = `
            <td>${todo.task}</td>
            <td>${todo.dueDate.toLocaleString()}</td>
            <td>INSERT_COMPLETE_CHECK</td>
            <td>${deleteBtn}</td>
            `;
            this.tbody.appendChild(row);
        }
    }

    clearTable() { this.tbody.innerHTML = ''; }

    clearInputs() {
        this.taskInput.value = '';
        this.dueDateInput.value = '';
    }
}
