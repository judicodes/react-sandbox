import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

interface Task {
  title: string;
  completed: boolean;
  date: string;
}

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage<string>("task", "");
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskObj: Task = {
      title: task,
      completed: false,
      date: new Date().toLocaleDateString()
    };
    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="taskInput">Add Task</label>
        <input
          type="text"
          id="taskInput"
          value={task}
          onChange={(e) => {
            setTask(e.currentTarget.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>
      <hr />
      {tasks.map((task: Task) => (
        <h3 key={task.date}>{task.title}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
