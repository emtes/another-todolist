class TodoList {
  constructor() {
    this.tasks = {};
  }
  addTask(task, dueDate) {
    const todo = new Todo(task, dueDate)
    this.tasks[todo.taskId] = todo
    return todo
  }

  deleteTask(taskId) {
    delete this.tasks[taskId];
  }
  updateTask() {}
}
