import React from "react";
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
  const [name, setChange] = useState("");
  const [name2, setInput] = useState("");

  const [name3, setSubmit] = useState("");
  const [emailSubmit, setEmailSubmit] = useState("");

  const handleChange = (e) => {
    let result = e.target.value;
    setChange(result);
  };
  const handleInput = (e) => {
    let result = e.target.value;
    setInput(result);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    // alert(`submit : ${name3}`);
    setEmailSubmit(`your email ${name3} is submitted`)

  }
  const changeSubmit = (e) =>{
    setSubmit(e.target.value);
  }
  
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
        <div className="example">
          <h3>b. OnInput Example</h3> <br />
          <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter email" value={name3} onChange={changeSubmit} />
            
           
            <span>{emailSubmit}</span>
            
          </form>
        </div>
      </div>
    </>
  );
}
