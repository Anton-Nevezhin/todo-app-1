import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from '../../store/todo-slice' // Раньше передавалось через пропсы

const TodoItem = ({
  id,
  text,
  completed,
}: {
  id: string;
  text: string;
  completed: boolean;
}) => {
  const dispatch = useDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({id}))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
