import React from "react";
const demo = `
Event Bubbling হলো একটা event  প্রথমে inner element এ ঘটে, 
তারপর ধাপে ধাপে তার parent → grandparent → root পর্যন্ত উপরে চলে যায়।

root → grandParant → parent → Children 
event.stopPropagation() ব্যবহার করলে bubbling বন্ধ হয়ে যাবে।
`;

export default function Bubbling() {
  const handleGrandParent = () => {
    alert("🔴 Grandparent clicked!");
  };
  const handleParent = () => {
    alert("🟡 Parent clicked!");
  };
  const handleChild = (e) => {
    alert("🟢 Child clicked! ");
    e.stopPropagation();
  };

  return (
    <div className="handlerCard">
      <div className="titleCard">
        <h1>EVENT BUBBLING → </h1>
        <p style={{ color: "yellow" }}>
          {" "}
          root → grandParant → parent → Children{" "}
        </p>
        <pre>{demo}</pre>
      </div>
      <div
        onClick={handleGrandParent}
        style={{ padding: "20px", border: "2px solid red" }}
      >
        Grandparent
        <div
          onClick={handleParent}
          style={{ padding: "20px", border: "2px solid orange" }}
        >
          Parent
          <button
            onClick={handleChild}
            style={{ padding: "10px", margin: "40px" }}
          >
            Click Me (Child)
          </button>
        </div>
      </div>
    </div>
  );
}
