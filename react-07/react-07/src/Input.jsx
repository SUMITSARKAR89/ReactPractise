import { useState } from "react";

const demo = `
 const [name, setName] = useState("");

 <input
    type="text"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
         
/>
<span>Hello, {name}</span>
`;

export default function Input() {
  const [name, setName] = useState("");
  return (
    <>
      <div className="state">
        <div>
          <h1>state, setState and event handler</h1>
          <pre>{demo}</pre>
          <h3>4 .Input Form Controlled Component</h3>
          <br />
          <br />
          <span>Ex:4</span>
          <br />
        </div>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "50%" }}
        />
        <br />
        <span style={{ width: "100%", padding: "10px" }}>Hello , {name}</span>
      </div>
    </>
  );
}
