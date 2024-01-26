const InputField = ({
  text,
  handleInput,
  handleSubmit,
}: {
  text: string;
  handleInput: (value: string) => void;
  handleSubmit: () => void;
}) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputField;
