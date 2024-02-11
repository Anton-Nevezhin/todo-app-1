import { useSelector } from 'react-redux'
import TodoItem from "../todo-item/todo-item";
import { RootState } from '../../store';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos) // Получаем информацию из state
  const filter: string = useSelector((state: RootState) => state.filter) // Получаем информацию из state
  return (
    <ul>
      {todos.map((todo) => {
        if (filter === 'Not') {
        return (
        <TodoItem
          key={todo.id}
          {...todo}
        />)}
})}
    </ul>
  );
};

export default TodoList;
