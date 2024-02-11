import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './slices/todo-slice' // Можем назвать как угодно
import dataReducer from './slices/data-slice'
import filterReducer from './slices/filter-slice'
import { useDispatch } from "react-redux";


export const store = configureStore({
    reducer: {
        todos: todoReducer,
        data: dataReducer,
        filter: filterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const UseAppDispatch = () => useDispatch<AppDispatch>();
