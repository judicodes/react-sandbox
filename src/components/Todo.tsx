import { useEffect, useRef, useState } from "react";

interface TodoItem {
  title: string;
}

function Todo() {
  const [todo, setTodo] = useState<TodoItem>({ title: "" });
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  return <div>{loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>}</div>;
}

export default Todo;
