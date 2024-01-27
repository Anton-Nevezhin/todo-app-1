import { createSlice } from "@reduxjs/toolkit";
import { TodosType } from "../types/todos-type";


const initialState: initialStateType = {
    todos: []
}

type initialStateType = {
    todos: TodosType []
}

const todoSlice = createSlice ({ //Это 'срез'
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({ // Указываем state что нужно изменить todos
                id: new Date().toISOString(),
                text: action.payload.text, // Данные для изменения берутся из action (action - событие)
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggleTodo.completed = !toggleTodo.completed
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions

export default todoSlice.reducer // reducer состоит из reducers