import "./form-todo.css";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/slices/todo-slice' // Импортируем события из среза
import { filterAll, filterNotCompleted, filterCompleted } from '../../store/slices/filter-slice' // Импортируем события из среза
import InputField from "../UI/input-field/input-field";


function FormTodo() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch()
  // const [filterCompleted, setFiltrCompleted] = useState<string>("");

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  const filterAll = () => {
    filterAll()
  }

  const filterNotCompleted = () => {
    filterNotCompleted()
  }

  const filterCompleted = () => {
    filterCompleted()
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} filterAll={filterAll} filterNotCompleted={filterNotCompleted} filterCompleted={filterCompleted}/>

    </div>
  );
}

export default FormTodo;
