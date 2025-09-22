import React from "react";
import { useState } from "react";
const demo = `
onKeyDown- কোনো কী চাপা মাত্র ট্রিগার হয়
onKeyUp - কী ছেড়ে দিলে ট্রিগার হয়।
`;

export default function Keyboard() {
  const [key, setKey] = useState("Type inside the box...");
  const handleKeyDown = (e) => setKey(`key Down : ${e.key} `);
  const handleKeyUp = (e) => setKey(`key Up : ${e.key} `);
  const handleKeyPress = (e) => setKey(`key press : ${e.key} `);
  return (
    <>
      <div className="titleCard">
        <h1>2. Keyboard Events → </h1>
        <p style={{ color: "yellow" }}>
          onKeyDown, onKeyUp, onKeyPress (deprecated).
        </p>
        <pre>{demo}</pre>
      </div>
      <h2 style={{ textAlign: "center" }}>
        <span style={{ color: "purple" }}>{key}</span>
      </h2>
      <div className="box">
        <input
          type="text"
          placeholder=" Try typing..."
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        onKeyPress={handleKeyPress}
        />
      </div>
    </>
  );
}
