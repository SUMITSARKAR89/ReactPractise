

import { useState } from "react";

const demo = `
Focusable element → input, textarea, select, অথবা tabindex দেওয়া div/span ইত্যাদি।
onFocus → focus হলে
onBlur → focus হারালে`;

export default function Focus() {
  const [focus, setFocus] = useState("");
  const [bgcolor, setBgColor] = useState("#fff"); //যদি কালার change করতে চাই
  const handleFocus = () => {
    setFocus("🟢 Input Focus");
    setBgColor("black") //bg color
  };

  const handleBlur = () => {
    setFocus("⚪ Input lost focus!");
    setBgColor("#fff")

  }
  return (
    <div className = "handlerCard">
      <div className="titleCard">
        <h1>5. Focus Events → </h1>
        <p style={{ color: "yellow" }}>onFocus, onBlur.</p>
        <pre>{demo}</pre>
      </div>
      <div className="container">
        <div className="example">
          <h3>a. onFocus Example and onBlur Example</h3> <br />
          <input
            type="text"
            placeholder="Focus on me"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ padding: "10px", width: "200px", backgroundColor : bgcolor }} //bgColor
          />
          <span className="copySpan">{focus} </span>
        </div>
      </div>
    </div>
  );
}
