import React from "react";

interface TodoInputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addDataHandler: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ todo,setTodo,addDataHandler, }) => {
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addDataHandler}>dataForTest</button>
    </div>
  );
};

export default TodoInput;
