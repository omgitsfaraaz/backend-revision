import { todos } from "../../utils/db.js"

const todosResBuilder = (success, data, error) => {
    return {
        success, data, error
    }
}

export const getTodos = (req, res) => {
    res.status(200).json(todosResBuilder(true, { todos: todos }, null))
}

export const createTodo = (req, res) => {
    const title = req.body.title
    if (!title) {
        res.status(400).json(todosResBuilder(false, null, 'Title field is required'))
    } else {
        const newTodo = {
            id: todos.length + 1,
            title: title,
            completed: false
        }
        todos.push(newTodo)
        res.status(200).json(todosResBuilder(true, { todo: newTodo }, null))
    }
}

export const deleteTodo = (req, res) => {
    console.log('id from delete', req.params.id)
    const id = req.params.id
    const todoIndex = todos.findIndex((data) => data.id == id)
    if (todoIndex == -1) {
        res.status(400).json(todosResBuilder(false, null, `todo with id ${id} does not exist`))
    } else {
        const deletedTodo = todos.splice(todoIndex, 1)
        console.log('deleted todo', deletedTodo)
        res.status(200).json(todosResBuilder(true, { todo: myTodo }, null))
    }
}

export const editTodo = (req, res) => {
    const id = req.params.id
    const myTodo = todos.find((data) => data.id == id)
    const todoIndex = todos.findIndex((data) => data.id == id)
    if (!myTodo) {
        res.status(400).json(todosResBuilder(false, null, `todo with id ${id} does not exist`))
    } else {
        let updatedTodo = {
            id: myTodo.id,
            title: req.body.title == undefined ? myTodo.title : req.body.title,
            completed: req.body.completed == undefined ? myTodo.completed : req.body.completed,
        }
        todos.splice(todoIndex, 1, updatedTodo)
        res.status(200).json(todosResBuilder(true, { todo: updatedTodo }, null))
    }
}