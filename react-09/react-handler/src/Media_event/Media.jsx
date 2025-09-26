import React, { useState } from "react";

const demo = `
onPlay → যখন media play শুরু হয়।
onPause → যখন media pause হয়।
onEnded → media শেষ হলে trigger হয়।
onTimeUpdate → media play চলার সময় progress update দেয় (সময় update হয়)।
`;

export default function Media() {
    //Example for Play Pause and End video
  const [status, setStatus] = useState("Media not started yet");
 
  const handlePlay = () => {
    setStatus("▶️ Media is playing");
  };
  const handlePause = () => {
    setStatus("video Pause");
  };
  const handleEnded = () => {
    setStatus("Ended Video");
  };



   // Example for time update
  const [time, setTime] = useState(0);
const handleTimeUpdate =(e) => {
    setTime(e.target.currentTime.toFixed(2))
}
  return (
    <div className="handlerCard">
      <div className="titleCard">
        <h1>8. Media Events → </h1>
        <p style={{ color: "yellow" }}>
          onPlay, onPause, onEnded, onTimeUpdate
        </p>
        <pre>{demo}</pre>
      </div>
      <div className="container">
        <div className="example">
          <h3>1. play pause Ended and timeUpdate</h3> <br />
          <video
            width="400"
            controls
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
            style={{ border: "2px solid gray", borderRadius: "8px" }}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support video.
          </video>
          <span>{status} </span>
          <span style={{background : "red", padding : "10px"}}>⏱ Current Time:{time} </span>
        </div>
      </div>
    </div>
  );
}
