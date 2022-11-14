const getTasks = "SELECT * FROM tasks";
const addTask = "INSERT INTO tasks (task, priority) VALUES ($1, $2)";
const removeTask = "DELETE FROM tasks WHERE id = $1";
const updateTask = "UPDATE tasks SET task = $1, priority = $2 WHERE id = $3";

module.exports = {
    getTasks,
    addTask,
    removeTask,
    updateTask
}