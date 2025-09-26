import React, { useState } from "react";

const demo = `
onTouchStart → যখন স্ক্রিনে আঙুল রাখবে তখন ট্রিগার হবে।
onTouchMove → যখন আঙুল স্ক্রিনে রেখে move করবে।
onTouchEnd → যখন আঙুল স্ক্রিন থেকে সরাবে।
`;
export default function Touch() {

    const [touch, setTouch] = useState("এগুলো মূলত mobile / touch devices এ কাজ করে");
    const handleTouchStart = () => {
        setTouch("🟢 Touch started!")
    };
    const handleTouchMove = () => {
        setTouch("🟡 Touch moving...")
    };
    const handleTouchEnd = () => {
        setTouch("🔴 Touch ended!")
    };
  return (
    <div className="handlerCard">
      <div className="titleCard">
        <h1>6. Touch Events → </h1>
        <p style={{ color: "yellow" }}>
          onTouchStart, onTouchMove, onTouchEnd.
        </p>
        <pre>{demo}</pre>
      </div>
      <div className="container">
        <div className="example">
          <h3> onTouchStart, onTouchEnd, onTouchMove</h3> <br />
          <h2>Touch Events Example</h2>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "lightblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px auto",
              borderRadius: "12px",
              userSelect: "none",
            }}
          >
            Touch Here 
          </div>
          <span >{touch} </span>
        </div>
      </div>
    </div>
  );
}
