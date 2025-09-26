import React, { useState } from "react";

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
      <div className="countBody">
        <span>Count: {count}</span>
        <div className="count-card">
            <button onClick={handleUp} disabled = {count === 5}>+</button>
            <button onClick={handleDown} disabled = {count === -5}>-</button>
            <button onClick={handleReset}>0</button>
        </div>
        
      </div>
    </div>
  );
}
