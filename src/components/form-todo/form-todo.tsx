import './form-todo.css'
import { useState } from 'react'
import TodoList from '../todo-list/todo-list'
import InputField from './input-field/input-field';

function FormTodo() {

    type TodosType = {
        id: string;
        text: string;
        completed: boolean;
      };
    const [todos, setTodos] = useState<TodosType[]>([])
    const [text, setText] = useState<string>('')
  
    const addTodo = () => {
      if (text.trim().length) {
        setTodos([
          ...todos,
          {
            id: new Date().toISOString(),
            text,
            completed: false
          }
      ])
      setText('')
      }
    }

    const removeTodo = (todoId:string) => {
      setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const toggleTodoComplete = (todoId:string) => {
      setTodos(
        todos.map(
          todo => {
            if (todo.id !== todoId) return todo
            return {
              ...todo,
            completed: !todo.completed
            }
          }
        )
      )
    }
  
    return (
        <div className="App">
          <InputField
            text = {text}
            handleInput = {setText}
            handleSubmit = {addTodo}
          />
          <TodoList
            todos = {todos}
            toggleTodoComplete = {toggleTodoComplete}
            removeTodo = {removeTodo}
          />
        </div>
    )
  }
  
  export default FormTodo
  