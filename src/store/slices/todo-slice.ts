import { createSlice } from "@reduxjs/toolkit";
import { TodosType } from "../../types/todos-type";


const initialState: initialStateType = {
    todos: [] // Имя стейта
}

type initialStateType = {
    todos: TodosType []
}

const todoSlice = createSlice ({ //Это 'срез' - полочка. Шкаф - store. slice - человек
    name: 'todos', // Имя
    initialState, // Начальное состояние
    reducers: {
        addTodo(state, action) { // Кофта. addTodo - действие. state - начальное положение. action - желаемый результат
            state.todos.push({ // Указываем state что нужно изменить todos
                id: new Date().toISOString(),
                text: action.payload.text, // Данные для изменения берутся из action (action - событие)
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodoComplete(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload)
            if (toggleTodo) toggleTodo.completed = !toggleTodo.completed // Проверка на случай, если toggleTodo отсутствует (иначе дает ошибку)
        },
}})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions

export default todoSlice.reducer // reducer состоит из reducers
// На этой странице три reducers. Они автоматически группируются в один reducer