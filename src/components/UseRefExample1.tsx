import React, { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = "red";
    }
    if (paragraphRef.current) {
      paragraphRef.current.innerText = "It's magic!";
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <p ref={paragraphRef}>Bla Blubb</p>
    </>
  );
}

export default UseRefExample1;
