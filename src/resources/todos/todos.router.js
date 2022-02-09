import { Router } from "express";
import { createTodo, deleteTodo, editTodo, getTodos } from "./todos.controller.js";

export const todoRouter = Router();

todoRouter.route('/')
    .get(getTodos)
    .post(createTodo)


todoRouter.route('/:id')
    .delete(deleteTodo)
    .patch(editTodo)