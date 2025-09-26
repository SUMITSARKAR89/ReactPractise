import React, { useState } from "react";

const demo = `
onDragStart → যখন কোনো element drag শুরু হয়।
onDrag → drag করার সময় বারবার trigger হয়।
onDragOver → অন্য element এর উপর drag করলে trigger হয় 
onDrop → drag করা element drop করলে trigger হয়।

 onDragOver & onDrop -> (default behavior বন্ধ করতে 
             e.preventDefault() ব্যবহার করতে হয়, না হলে drop কাজ করবে না)।



    [ e.dataTransfer.setData("text", e.target.id)]
`;

export default function Drag() {
  const [message, setMessage] = useState("Drag the box and drop it here 👇");

  
  //1. Example one DragStart and Drag
  const handleStart = (e) => {
    setMessage("🟢 Drag started!");
    e.dataTransfer.setData("text", e.target.id);
  };
  // Example one
  const handleDrag = () => {
    setMessage("🟡 Dragging...");
  };




  //2.Example Two DragOver and Drop
  const handleOver = (e) => {
    setMessage("🟣 Drag over drop zone!");
    e.preventDefault()
  }
  //Example two
  const handleDrop = (e) => {
      e.preventDefault();
    const data =   e.dataTransfer.setData("text");
    setMessage(`🔴 You dropped: ${data}`)

  }


  return (
    <div className="handlerCard">
      <div className="titleCard">
        <h1>7. Drag & Drop Events → </h1>
        <p style={{ color: "yellow" }}>
          onDrag, onDrop, onDragOver, onDragStart.
        </p>
        <pre>{demo}</pre>
      </div>
      <div className="container">
        {/* Example one DragStart and Drag */}
        <div className="example">
          <h3>1. onDragStart & onDrop Example</h3> <br />
          <div
            id="dragBox"
            draggable="true"
            onDragStart={handleStart}
            onDrag={handleDrag}
          >
            Drag Me
          </div>
         
        </div>
        {/* Example Two DragOver and Drop */}
         <div className="example">
          <h3>2. onDrag & onDragOver Example</h3> <br />
          <div
          className="dragOverBox"
            onDragOver={handleOver}
            onDrop={handleDrop}
          >
            Drag Over Here
          </div>
         
        </div>
         <span >{message} </span>
      </div>
    </div>
  );
}
