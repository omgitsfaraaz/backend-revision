import express from "express";
import bodyParser from "body-parser";
import { todoRouter } from "./src/resources/todos/todos.router.js";

// Instance
const app = express()

// Middlewares
app.use(bodyParser.json())
app.use('/api/todos', todoRouter)
// app.use('/api/delete-todo', delTodoRouter)

app.get('/', (req, res) => {
    res.end('This is our revision class')
})

// Port
app.listen(4000, () => console.log('Server is started at PORT 4000'))