import Elementvariable from "./CONDITIONAL_RENDER/Elementvariable";
import Ifelse from "./CONDITIONAL_RENDER/Ifelse";
import InlineVariable from "./CONDITIONAL_RENDER/InlineVariable";
import Logic from "./CONDITIONAL_RENDER/Logic";
import Nested from "./CONDITIONAL_RENDER/Nested";
import Ternery from "./CONDITIONAL_RENDER/Ternery";

const demo = `
export default function Ifelse() {
    const isLogIn = true;
  
    if (isLogIn){
        return <h4>Welcome Back</h4>
    }else{
        return <h4>Please log in</h4>
    }
}

`;
function App() {
  return (
    <>
      <div>
        <h1>COnditional Rendering</h1>
        <p>
          if/else → Simple conditions <br />ternary → দুইটা অপশন দেখাতে <br /> && → শুধু true
          হলে কিছু দেখাতে <br /> switch → multiple conditions handle করতে <br /> element
          variable → শর্তের উপর JSX store করে দেখাতে <br /> early return → shortcut
          exit <br /> nested ternary → multiple ছোট condition একসাথে
        </p>
        <div className="state">
          <h3>Ex:1 If/else logic</h3>
          <p> RETURN() function use every time</p>
          <pre>{demo}</pre>
          <Ifelse />
        </div>
      </div>
      <Ternery />
      <Logic />
      <InlineVariable />
      <Elementvariable />
      <Nested />
    </>
  );
}

export default App;
