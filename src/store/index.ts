import { configureStore } from "@reduxjs/toolkit"
import todoReduser from './todo-slice'

export default configureStore {
    reducer: {
        todos: todoReduser
    }
}
