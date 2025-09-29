import React, { useState } from "react";

const demo = `
Purpose of this assignment : Testing students skills on
    useState() hook
    Event Handler
    conditional rendering

Assignment steps:
part 1: make sure that increment, decrement and reset functionality works (3 points)
part 2: disable buttons(2 points)

disable increment button when count value is 5
disable decrement button when count value is -5`;

export default function Countapp() {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };
  const handleDown = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <pre>{demo}</pre>
      <div className="countBody">
        <span>Count: {count}</span>
        <div className="count-card">
          <button onClick={handleUp} disabled={count === 5}>
            +
          </button>
          <button onClick={handleDown} disabled={count === -5}>
            -
          </button>
          <button onClick={handleReset}>0</button>
        </div>
      </div>
    </div>
  );
}
