import From from "./Form_event/From";
import Keyboard from "./Keyboard_event/Keyboard";
import Clipboard from "./ClipBoard_event/Clipboard";
import Mouseevent from "./Mouse_event/Mouseevent";
import Focus from "./Focus_event/Focus";
import Touch from "./Touch_event/Touch";
import Drag from "./Drag_event/Drag";
import Media from "./Media_event/Media";
import Image from "./Image_event/Image";
import ImageEx2 from "./Image_event/ImageEx2";
import Scroll from "./Scroll_event/Scroll";
import Bubbling from "./EventBubbling/Bubbling";
import React, { useState } from "react";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";


function App() {
  const [page, setPage] = useState("home");
  
  return (
    <>
      <div className="main">
        <div className="titleCard">
          <p style={{ color: "yellow" }}>
            e.preventDefault(); ডিফল্ট context menu বন্ধ করে <br /> <br />
            keyUp/KeyDown?keyPress/onChange/onSubmit/onInput/onPaste/dragStart/dragOver/onDrop/onTimeUpdate/onScroll এর ক্ষেত্রে
            event ব্যবহার করতে হয় <br /> <br />
            onSubmit/dragOver/onDrop এর ক্ষেত্রে e.preventDefault(); // page reload আটকাবে{" "}
            <br /> <br /> onPaste/onDrop/dragStart এর ক্ষেত্রে event.clipboardData.getData("") ব্যবহার
            করতে হয়; <br /> <br /> onTimeUpdate এর ক্ষেত্রে e.target.currentTime.toFixed() ব্যবহার
            করতে হয় <br /> <br />
            event.stopPropagation() ব্যবহার করলে bubbling বন্ধ হয়ে যাবে।
          </p>
        </div>
      </div>
      
      <Mouseevent />
      <Keyboard />
      <From />
      <Clipboard />
      <Focus />
      <Touch />
      <Drag />
      <Media />
      <Image />
      <ImageEx2 />
      <Scroll />
      <Bubbling />
       <div>
      {page === "home" && <HomePage goToSignUp={() => setPage("signup")} />}
      {page === "signup" && <SignUpPage goBack={() => setPage("home")} />}
    </div>
    </>
  );
}

export default App;
