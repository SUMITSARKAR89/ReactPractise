import {useState} from 'react';
const demo =`
1. onCopy
কোনো টেক্সট copy করলে ট্রিগার হয়।

2. onCut 
কোনো টেক্সট cut করলে ট্রিগার হয়।

3. onPaste
 যখন input এ কিছু paste করা হয় তখন ট্রিগার হয়।
 [const index = e.ClipboardData.getDate("text")]
 
 
onCopy → text copy করলে কাজ করে।
onCut → text cut করলে কাজ করে।
onPaste → paste করলে কাজ করে এবং paste হওয়া ডেটা access করা যায়।`

export default function Clipboard() {

  // example one  COPY
  const [copy, setCopy] = useState("")
  const handleCopy = () => {
    setCopy("your text copied")

  }

  // example two CUT
  const [hide, setHide] = useState("Cut this text and see the magic!");
  const [cut, setCut] = useState(""); //মেসেজ
  const handleCut = () => {
    setCut("you cut this text");
    setHide("");

  }

   // example three PASTE
   const [paste, setPaste] = useState("");
   const handlePaste = (e) => {
    const index = e.ClipboardData.getDate("text");
    setPaste(index);
   }
  

  return (
    <div className="handlerCard">

      <div className="titleCard">
        <h1>4. Clipboard Events → </h1>
        <p style={{ color: "yellow" }}>
         onCopy, onCut, onPaste.
        </p>
        <pre>{demo}</pre>
      </div>
      <div className="container">
        {/* 1. Ex: 1  */}
        <div className="example">
          <h3>a. onCopy Example</h3> <br />
         
          <h2 onCopy={handleCopy}  style={{
              border: "1px solid gray",
              padding: "10px",
              width: "50%",
              cursor: "text"
            }}> copy the text</h2>
          <span className='copySpan'>{copy} </span>
        </div>

        <div className="example">
          <h3>b. onCut Example</h3> <br />
         
          <h2 onCut={handleCut}  style={{
              border: "1px solid gray",
              padding: "10px",
              width: "50%",
              cursor: "text"
            }}>{hide}</h2>
             {/* মেসেজ দেখাবে এখানে */}
          <span className='copySpan'>{cut} </span>
        </div>
        <div className="example">
          <h3>c. onPaste Example</h3> <br />
         
          <input onPaste={handlePaste} placeholder='paste something here'  style={{
              border: "1px solid gray",
              padding: "10px",
              width: "50%",
              cursor: "text"
            }}/>
          <span className='copySpan'>{paste} </span>
        </div>
      </div>
    </div>
  )
}
