import Besic from "./components/Besic";
import Bolean from "./components/Bolean";
import Multiple from "./components/Multiple";
import Number from "./components/Number";
import Object from "./components/Object";
import Array from "./components/Array";
import Callback from "./components/Callback";
import Image from "./components/Image";

function App() {
  return (
    <>
    <h1>Props and Destruction</h1>
      <Besic name="this is Besic text props" />
      <Besic name="this is sumit sarkar" />
      <Multiple
        username="sumit sarkar"
        email="sumit89@mail.com"
        contact="111-222-333"
      />
      <Number valueOne={50} valueTwo={5} />
      <Bolean online={true} offline={false} />
      <Object user={{ name: "sumit", age: 30 }} />
      <Array items={["HTML", "CSS", "React JS"]} />
      <Callback onClick={() => alert("you click the button")} />
      <Image src="https://surl.lu/mqcrut" alt="Profile pic" />
    </>
  );
}

export default App;
