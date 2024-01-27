import { TodosType } from "../../types/todos-type";
import { useSelector } from 'react-redux'
import TodoItem from "../todo-item/todo-item";

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos) // Получаем информацию из state
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
