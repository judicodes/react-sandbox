import React, { useCallback, useState } from "react";

function UseCallbackExample() {
  const [todos, setTodos] = useState<string[]>([]);
  const addTask = useCallback(() => {
    setTodos((prevState) => [...prevState, "Some new task"]);
  }, [setTodos]);
  return (
    <div>
      <Button addTask={addTask} />
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}

interface ButtonProps {
  addTask: () => void;
}
const Button = React.memo(({ addTask }: ButtonProps) => {
  console.log("Button rendered");
  return (
    <div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
});

export default UseCallbackExample;
