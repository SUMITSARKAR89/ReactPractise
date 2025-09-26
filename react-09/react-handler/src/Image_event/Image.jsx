import React, { useState } from "react";

const demo = `
onLoad → image/resource ঠিকভাবে load হলে কাজ করবে।
onError → যদি image/resource load না হয় (wrong URL বা server error) তখন কাজ করবে।
`;

export default function Image() {
    const [subject, setSubject] = useState("⏳ Loading image...");
    const handleLoad = () => {
        setSubject("✅ Image loaded successfully!")
    }
    const handleError = () => {
        setSubject("❌ Failed to load image!")
    }
  return (
    <div className="handlerCard">
      <div className="titleCard">
        <h1>9. Image/ Resource Events → </h1>
        <p style={{ color: "yellow" }}>onLoad, onError.</p>
        <pre>{demo}</pre>
      </div>
      <div className="container">
        <div className="example">
            <h3>1. Image/Resource Events Example</h3> <br />
             <img
        src="https://cdn.wallpapersafari.com/44/55/kp50Ri.jpg" // এখানে ইচ্ছে করলে  link দিয়ে test করতে পারো
        alt="demo"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: "300px",
          height: "200px",
          objectFit: "cover",
          border: "2px solid gray",
          borderRadius: "10px",
        }}
      />
      <span>{subject}</span>
        </div>
      </div>
    </div>
  );
}
