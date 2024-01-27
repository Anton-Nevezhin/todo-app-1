import "./form-todo.css";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todo-slice' // Импортируем события из среза
import TodoList from "../todo-list/todo-list";
import InputField from "../UI/input-field/input-field";


function FormTodo() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default FormTodo;
