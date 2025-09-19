import { useState } from "react";

const demo = `
const [isVisible, setIsVisible] = useState(true);

 <button onClick={() => setIsVisible(!isVisible)}>
    {isVisible ? "Hide" : "Show"}
 </button>
<span>
    {isVisible && <p>Hello, I am visible!</p>}
</span>

`;
const demo2 = `
 function handleToggle() {
    setIsVisible(!isVisible);
  }
`;
const demo3 = ` 
<button onClick={handleToggle}>
    {isVisible ? "Hide" : "Show"}
</button>
      `;

const demo4 = `
 onClick={() => setIsVisible(!isVisible)}>
    {isVisible ? "Hide" : "Show"}
 
`;
const demo5 = `function handleToggle() {
    setIsVisible(!isVisible);
  }`;

export default function Toggole() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="state">
        <div>
          <h1>state, setState and event handler</h1>
          <pre>{demo}</pre>
          <p>what i did? if i use</p>
          <pre>{demo2}</pre>
          <p> then i could use ONCLICK</p>
          <pre>{demo3}</pre>
          <div style={{ border: "1px solid #fff" }}>
            <p>in sort</p>
            <pre>{demo4}</pre>
            <p>to</p>
            <pre>{demo5}</pre>
          </div>
          <h3>3. Toggle Button</h3>
          <br />
          <br />
          <span>Ex:3</span>
          <br />
        </div>

        <button onClick={() => setIsVisible(!isVisible)} title="CLICK HERE">
          {isVisible ? "Hide" : "Show"}
        </button>
        <span>{isVisible && <p>Hello, I am visible!</p>}</span>
      </div>
    </>
  );
}
