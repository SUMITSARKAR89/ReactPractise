import { useState } from "react";

export default function SignUpPage({ goBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fromTxt, setfromTxt] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //print submit text
    setfromTxt("The from is submitted. for details go to console");

    //reset
    setName("");
    setEmail("");
    setPassword("");

    //show result on console
    let info = {
      name: name,
      email: email,
      password: password,
    };
    console.log(info);

    // remove message after 5s
    setTimeout(() => {
      setfromTxt("");
    }, 5000);
  };

  return (
    <div className="formCard">
      <h1>📝 Sign Up Page</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name : </label>
          <input
            onChange={handleName}
            type="text"
            name="name"
            id="name"
            value={name}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email : </label>
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            id="email"
            value={email}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password : </label>
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            id="password"
            value={password}
            required
          />
        </div>
        <button type="submit" className="formBtn">
          Sign UP
        </button>
        <p style={{ color: "#fff", fontSize: "0.8rem", paddingLeft: "10px", transition : "0.5s ease" }}>
          {fromTxt}
        </p>
      </form>

      <button onClick={goBack}>⬅ Back to Home</button>
    </div>
  );
}
