import { useEffect, useMemo, useRef, useState } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [increment, setIncrement] = useState(0);

  const sqrt = useMemo(() => expensiveSqrt(number), [number]);

  const renders = useRef(0);
  useEffect(() => {
    renders.current++;
  });

  const onClick = () => {
    setIncrement((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(parseInt(e.currentTarget.value));
        }}
      />
      <h2>
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick}>Re-Render</button>
      <h3>Renders: {renders.current} </h3>
    </div>
  );
}

function expensiveSqrt(n: number): number {
  console.log("Expensive function called!");
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  console.log("Expensive function done!");

  return Math.sqrt(n);
}

export default UseMemoExample;
