import React, { useState } from "react";

const demo = `
 একটি React form যেখানে:
1. Name, Email, Password, Confirm Password input আছে
2. Gender radio button, Country select, Bio textarea, Agree checkbox আছে
3. Submit করলে console-এ form data দেখাবে
4. Success message দেখাবে 5 সেকেন্ডের জন্য
5. Password validation আছে (min 6 chars, confirm match)

(Hint: Use useState, onChange, onBlur, onSubmit, onReset, setTimeout)

`

export default function Form() {
  const [show, setShow] = useState("");
  // 1
  const [name, setName] = useState("");
  // 2
  const [email, setEmail] = useState("");
  // 3
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  // 4
  const [gender, setGender] = useState("");
  // 5
  const [country, setCountry] = useState("--Select--");
  // 6
  const [bio, setBio] = useState("");
  // 7
  const [agree, setAgree] = useState(false);

  //1. name -----------------------------
  //   ========================================
  const handleName = (e) => {
    setName(e.target.value);
  };

  //2. email ---------------------------------
  //   ========================================
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //3. password-------------------------------
  //   ========================================
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //   confirm pass
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  //   password check
  const checkPass = () => {
    if (password.length < 6) {
      setError("Password must be 6 chars");

      setTimeout(() => {
        setError("");
      }, 3000); // ৩ সেকেন্ড পরে error clear করে দিচ্ছে
    } else if (password !== confirmPass) {
      setError("Password do not Match !");

      setTimeout(() => {
        setError("");
      }, 3000); // ৩ সেকেন্ড পরে error clear করে দিচ্ছে
    } else {
      setError("");
    }
  };

  //4. gender-------------------------------
  //   ========================================
  const handleMale = (e) => {
    setGender(e.target.value);
  };
  const handleFemale = (e) => {
    setGender(e.target.value);
  };
   const handleOther = (e) => {
    setGender(e.target.value);
  };

  //5. Select-------------------------------
  //   ========================================
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  //6. Select-------------------------------
  //   ========================================
  const handleBio = (e) => {
    setBio(e.target.value);
  };

  //7. Select-------------------------------
  //   ========================================
  const handleAgree = (e) => {
    setAgree(e.target.value);
  };

  //form submit===============================
  //   ========================================
  const handleSubmit = (e) => {
    e.preventDefault();

    setShow("The from is submitted. for details go to console");
    setTimeout(() => {
      setShow("");
    }, 5000);

    // console print
    let info = {
      name: name,
      email: email,
      password: password,
      confirmPass: confirmPass,
      gender: gender,
      country: country,
      bio: bio,
      agree : agree,
    };
    console.log(info);
  };

  //form Reset===============================
  //   ========================================
  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError("");
    setGender("");
    setCountry("");
    setBio("");
    setAgree(false)
  };

  return (
    <>
      <h1>Form</h1>
      
      <div className="container">
        <h2>Demo one</h2>
        <pre>{demo}</pre>
        <form action="" onSubmit={handleSubmit} onReset={handleReset}>
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

          {/* Radio input  */}
          <div
            className="input-group"
            style={{ background: "rgba(24, 52, 56, 0.82)" }}
          >
            <label>
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={handleMale}
              />
              Male
            </label>
            <label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={handleFemale}
              />
              Female
            </label>
            <label>
              <input
                id="other"
                type="radio"
                name="gender"
                value="Other"
                checked={gender === "Other"}
                onChange={handleOther}
              />
              Others
            </label>
          </div>

          {/* Select input  */}
          <div className="input-group">
            <label>Country:</label>
            <select value={country} onChange={handleCountry}>
              <option value="">--Select--</option>
              <option value="BD">Bangladesh</option>
              <option value="IN">India</option>
            </select>
          </div>

          {/* Textarea  input  */}
          <div className="input-group">
            <label>Bio:</label>
            <textarea
              value={bio}
              onChange={handleBio}
              placeholder="Tell us about you..."
              rows={6}
            />
          </div>

          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={handleAgree}
            />
            I agree to rules and condition
          </label>
          <br />

          <div className="btn-group">
            <button type="submit">Submit</button>
            <button type="reset" style={{ background: "yellow" }}>
              Reset
            </button>
          </div>
          <span
            style={{ color: "#fff", fontSize: "0.8rem", paddingLeft: "10px" }}
          >
            {show}
          </span>
        </form>
      </div>
    </>
  );
}
