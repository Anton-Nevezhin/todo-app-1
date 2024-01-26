import { TodosType } from "../../types/todos-type";
import TodoItem from "../todo-item/todo-item";

const TodoList = ({
  todos,
  toggleTodoComplete,
  removeTodo,
}: {
  todos: TodosType[];
  toggleTodoComplete: (value: string) => void;
  removeTodo: (value: string) => void;
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
