import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  //1. name -----------------------------
  const handleName = (e) => {
    setName(e.target.value);
  };

  //2. email ---------------------------------
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //3. password-------------------------------
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
//   confirm pass 
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

//   password check 
  const checkPass = () => {
    if (password.length < 6){
        setError("Password must be 6 chars")
        setTimeout(() => {
        setError("");
      }, 3000);
    }else if (password !== confirmPass){
        setError("Password do not Match !")
        setTimeout(() => {
        setError("");
      }, 3000);
    }else{
        setError("")
    }

  }


  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //
    let info = {
      name: name,
      email: email,
      password: password,
      confirmPass : confirmPass,
    };
    console.log(info);
    //
  };

  return (
    <>
      <h1>Form</h1>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          {/* name input */}
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={handleName}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* email input  */}
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="abc@example.com"
              required
            />
          </div>

          {/* password input  */}
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={handlePassword}
              onBlur={checkPass}
              maxLength={6}
              required
            />
            
            <label htmlFor="password">Confirm Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              value={confirmPass}
              onChange={handleConfirmPass}
              onBlur={checkPass}
              maxLength={6}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
