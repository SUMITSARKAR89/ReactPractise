// ==========================How to use Javascript on HTML body =========================
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//  ** point or key rules
// ✅ Allowed: 
//  + - * / ,
//  condition ? "Yes" : "No",
//  functionCall(),
//  array.map().

// ❌ Not Allowed: if, for, while directly inside JSX.


// 01. ex one================
const title = "Class One";
const desc =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod atque excepturi, unde repellendus debitis totam id tempora? Autem asperiores ratione in debitis consequuntur fugiat accusantium ea sunt pariatur explicabo?";
const date = "2025/09/03";

// =========inline css 
const textStyle = {
  backgroundColor : "green",
  padding : "20px",
  color : "#fff",
  fontSize : "1.5rem"

}

// 02. ex Twoo ===========================
const dateOne = new Date();
const currentYear = dateOne.getFullYear();

// 03. ex Three===========================
const currentDate = dateOne.getDate();
const currentMonth = dateOne.getMonth();

// 04. ex four===========================
const fruits = ["Apple", "Banana", "Cherry"];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* -------------01---------  */}
    <h1 style={{fontSize : "4rem"}}>{title}</h1>  
    <p style={textStyle}>{desc}</p>
    <span>{date}</span>

    {/* ---------------02----------  */}
    <h5>{currentYear}</h5>
     <h2>{5 + 10}</h2>

    {/* ---------------03----------  */}
    <p>{currentDate + "/ " + currentMonth + "/ " + currentYear}</p>

    {/* ---------------04----------  */}
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>

   
  </StrictMode>
);


