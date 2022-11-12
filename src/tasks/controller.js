const pool = require("../../db")
const queries = require('./queries')

const getTasks = (req, res) => {
    pool.query(queries.getTasks, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const addTask = (req, res) => {
    const { task, priority } = req.body;

    pool.query(queries.addTask, [task, priority], (error, result) => {
        if (error) throw error;
        res.status(201).send("Task added Succesfully!")
    })
}

const removeTask = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeTask, [id], (error, result) => {
        if (error) throw error;
        res.status(200).send("task removed succesfully.")
    })
}

module.exports = {
    getTasks,
    addTask,
    removeTask
}