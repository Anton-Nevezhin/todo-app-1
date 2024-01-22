import './form-todo.css'
import { useState } from 'react'

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

    const removeTodo = (todoId) => {
      setTodos(todos.filter(todo => todo.id !== todoId))
    }
  
    return (
        <div className="App">
          <label>
            <input value = {text} onChange={(e) => setText(e.target.value)}/>
            <button onClick = {addTodo}>Add Todo</button>
          </label>
          <ul>
            {
              todos.map(todo => <li key = {todo.id}>
                <input type = 'checkbox' />
                <span>{todo.text}</span>
                <span className = 'delete' onClick = {() => removeTodo({todo.id})}>&times;</span>
              </li>)
            }
          </ul>
        </div>
    )
  }
  
  export default FormTodo
  