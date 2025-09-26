import React, { useState } from 'react'

export default function ImageEx2() {
    const [subject, setSubject] = useState("⏳ Loading image...");
    const fallBack = "https://cdn.wallpapersafari.com/44/55/kp50Ri.jpg";
    const handleLoad = () => {
        setSubject("✅ Image loaded successfully!")
    }
    const handleError = (e) => {
        setSubject("❌ Failed! Showing fallback image.");
        e.target.src = fallBack;

    }
    
  return (
    <div className='handlerCard'>
     
      <h3>Image Fallback Example</h3>
      <img
        src="https://wrong.com/44/55/kp50Ri.jpg" // ভুল url দিয়ে test করতে পারো
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
  )
}
