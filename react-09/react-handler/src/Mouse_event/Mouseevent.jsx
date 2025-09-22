import { useState } from "react";
const demo = `
onClick → যখন ইউজার বাটন বা এলিমেন্টে ক্লিক করে।
onDoubleClick → যখন ডাবল ক্লিক করে।
onMouseEnter → যখন মাউস কোনো এলিমেন্টে ঢোকে (hover)।
onMouseLeave → যখন মাউস এলিমেন্ট থেকে বের হয়।
onMouseOver → onMouseEnter এর মতো, কিন্তু চাইল্ড এলিমেন্টেও ট্রিগার হয়।
onMouseOut → onMouseLeave এর মতো, কিন্তু চাইল্ড এলিমেন্টেও কাজ করে।
onMouseMove → যখন মাউস এলিমেন্টের মধ্যে নড়ে।
onMouseDown → যখন মাউস বাটন প্রেস করা হয়।
onMouseUp → যখন মাউস বাটন ছেড়ে দেওয়া হয়।
onContextMenu → যখন রাইট-ক্লিক করা হয়।`;

export default function Mouseevent() {
  const [message, setMessage] = useState("SHOW THE RESULT...");

  const handleClick = () => setMessage("👉 Single Click/ Left click detected!");
  const handleDoubleClick = () => setMessage("👉 Double Click!");
  const handleMouseEnter = () => setMessage("🖱️ Mouse Entered!");
  const handleMouseLeave = () => setMessage("🚪 Mouse Leave!");
  const handleMouseMove = () => setMessage("🐭 Mouse is Moving...");
  const handleMouseDown = () => setMessage("🔽 Mouse Button Down!");
  const handleMouseUp = () => setMessage("🔼 Mouse Button Released!");
  const handleMouseOver = () => setMessage("Mouse is over on it")

  //   for mouse right click
  const handleRightClick = (e) => {
    e.preventDefault();
    setMessage("⚡ Right Click Detected!");
  };
  return (
    <>
      <div className="titleCard">
        <h1>1. Mouse Events → </h1>
        <p style={{ color: "yellow" }}>
          onClick, onDoubleClick, onMouseEnter, onMouseLeave, onMouseMove, etc.
        </p>
        <pre>{demo}</pre>
      </div>

      <h2 style={{ textAlign: "center" }}>{message}</h2>
      <div
        className="box"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onContextMenu={handleRightClick}
        onMouseOver={handleMouseOver}
      >
        <p>🎯 </p>
      </div>
    </>
  );
}
