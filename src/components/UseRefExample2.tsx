import React, { useEffect, useRef, useState } from "react";

function UseRefExample2() {
  const renderCount = useRef(1);
  const [name, setName] = useState("");
  const prevName = useRef("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  useEffect(() => {
    prevName.current = name;
    renderCount.current++;
  }, [name]);
  return (
    <>
      <h1>Renders: {renderCount.current} </h1>
      <h2>Previous Name State: {prevName.current}</h2>
      <input type="text" value={name} onChange={handleInputChange} />
    </>
  );
}

export default UseRefExample2;
