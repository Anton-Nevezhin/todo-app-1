const InputField = ({
  text,
  handleInput,
  handleSubmit,
  filterAll,
  filterNotCompleted,
  filterCompleted,
}: {
  text: string;
  handleInput: (value: string) => void;
  handleSubmit: () => void;
  filterAll: () => void;
  filterNotCompleted: () => void;
  filterCompleted: () => void;
}) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
      <br/>
      <button onClick={filterAll}>Все</button>
      <button onClick={filterNotCompleted}>Незавершенные</button>
      <button onClick={filterCompleted}>Завершенные</button>
    </label>
  );
};

export default InputField;
