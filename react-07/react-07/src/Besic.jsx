import { useState } from "react";

const demo = `
import { useState } from "react";

export default function Besic() {
  const [a, setA] = useState(0);
  return (
    <>
      <div className="state">
      
        <h2>a: {a}</h2>
        <button onClick={() => setA(a + 1)} disabled={a === 10}>
          ++
        </button>
        <button onClick={() => setA(0)}>reset</button>
        <button onClick={() => setA(a - 1)} disabled={a === 0}>
          --
        </button>
      </div>
    </>
  );
}
`

export default function Besic() {
  const [a, setA] = useState(0);
  return (
    <>
      <div className="state">
        <h1>state, setState and event handler</h1>
        <pre>{demo}</pre>
        <h3>2. Counter Example Clasic</h3>
        <br />
        <br />

        <span>Ex:2</span>
        <h2>a: {a}</h2>
        <button onClick={() => setA(a + 1)} disabled={a === 10}>
          ++
        </button>
        <button onClick={() => setA(0)}>reset</button>
        <button onClick={() => setA(a - 1)} disabled={a === 0}>
          --
        </button>
      </div>
    </>
  );
}
