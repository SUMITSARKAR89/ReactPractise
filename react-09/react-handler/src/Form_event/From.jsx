import { useState } from "react";

const demo = `
1. onChange
Input/textarea/select এর মান পরিবর্তন হলেই কাজ করে।
React এ controlled component তৈরি করতে সবচেয়ে বেশি ব্যবহার হয়।

2. onSubmit
Form সাবমিট করলে ট্রিগার হয়।
সাধারণত form validation বা API call এর জন্য ব্যবহার করা হয়।
অবশ্যই e.preventDefault() ব্যবহার করতে হয়, যাতে পেজ রিফ্রেশ না হয়।

3. onInput
Input এ প্রতিবার character টাইপ করার সাথে সাথে কাজ করে।
onChange এর মতো, কিন্তু আরও instant feedback দেয়।
সাধারণত live search suggestion এর জন্য ব্যবহার হয়।

4. onReset
যখন form reset করা হয় (reset button ক্লিক করা হয় বা manually trigger করা হয়)।

Summary
onChange → যখন input এর value পরিবর্তন হয়।
onSubmit → form সাবমিট করলে কাজ করে।
onInput → প্রতিটি টাইপিং এর সময় সাথে সাথে কাজ করে।
onReset → form reset হলে কাজ করে।`;

export default function From() {
  // Example 1 → onChange

  const [name, setChange] = useState("");
  // input এর ভ্যালু পরিবর্তন হলে state update হবে
  const handleChange = (e) => {
    let result = e.target.value;
    setChange(result);
  };

  // Example 2 → onInput
  const [name2, setInput] = useState("");
  const handleInput = (e) => {
    let result = e.target.value;
    setInput(result);
  };

  // Example 3 → onSubmit & onReset

  const [emailSubmit, setEmailSubmit] = useState(""); // submit হলে মেসেজ দেখাবে
  const [name3, setSubmit] = useState(""); // input এর ভ্যালু

  // email input এর value state এ সেট করা
  const changeSubmit = (e) => {
    setSubmit(e.target.value);
  };
  // form submit করলে trigger হবে
  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault না দিলে form reload হয়ে যেত

    if (name3.trim() === "") {
      // যদি input খালি থাকে
      setEmailSubmit("Empty !  please input your mail address");

      // valid input হলে
    } else {
      setEmailSubmit(`your email ${name3} `);
    }
  };

  

  // reset করলে সব input এবং message clear হয়ে যাবে
  const handleReset = () => {
    setSubmit("");
    setEmailSubmit("");
  };

  return (
    <>
      <div className="titleCard">
        <h1>3. Form Events → </h1>
        <p style={{ color: "yellow" }}>
          onChange, onSubmit, onInput, onReset..
        </p>
        <pre>{demo}</pre>
      </div>

      <div className="container">
        {/* example 1  */}
        <div className="example">
          <h3>a. Onchange Example</h3> <br />
          <input
            type="text"
            placeholder="Type something"
            value={name}
            onChange={handleChange}
            style={{ width: "50%" }}
          />
          <h2>OnChange Print = {name}</h2>
        </div>

        {/* example 2  */}
        <div className="example">
          <h3>b. OnInput Example</h3> <br />
          <input
            type="text"
            placeholder="Type something"
            onInput={handleInput}
            style={{ width: "50%" }}
          />
          <h2>OnInput Print = {name2}</h2>
        </div>

        {/* example 3 */}
        <div className="example">
          <h3>c. OnInput Example</h3> <br />
          <form action="" onSubmit={handleSubmit} onReset={handleReset}>
            <input type="email" value={name3} onChange={changeSubmit} />
            <div className="sub-res">
              <button type="submit">submit</button>
              <button type="reset">reset</button>
            </div>

            <span
              style={{
                color: emailSubmit.includes("Empty") ? "red" : "green",
                marginLeft: "10px",
              }}
            >
              {emailSubmit}
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
