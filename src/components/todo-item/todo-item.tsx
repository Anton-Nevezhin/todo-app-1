const TodoItem = ({
  id,
  text,
  completed,
  toggleTodoComplete,
  removeTodo,
}: {
  id: string;
  text: string;
  completed: boolean;
  toggleTodoComplete: (value: string) => void;
  removeTodo: (value: string) => void;
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
