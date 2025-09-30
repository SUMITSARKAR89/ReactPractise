import React, { useState } from "react";
const demo = `
1. সব input এর জন্য একটাই handleChange ব্যবহার করা হয়েছে
2. state আলাদা আলাদা না রেখে object এ রাখা হয়েছে
3. form will be much Easier and friendly
4. use Spard Oparator (... user, name: value)
`;

export default function FromEasy() {
  // useState objects
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    gender: "",
    bio: "",
    agree: false,
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [reset, setReset] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("The from is submitted. for details go to console");
    setTimeout(() => {
      setSuccess("");
    }, 2000);

    console.log(formData);
  };

  const checkPass = () => {
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
    } else if (formData.password !== formData.confirmPass) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPass: "",
      gender: "",
      bio: "",
      agree: false,
    });
    setSuccess("");
    setError("");

    setReset("reset successfully");
    setTimeout(() => {
      setReset("");
    }, 3000);
  };

  return (
    <div>
      <div className="container">
        <h2>Demo Two (useState object)</h2>
        <pre>{demo}</pre>
        <form action="" onSubmit={handleSubmit} onReset={handleReset}>
          {/* name input */}
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              onBlur={checkPass}
              maxLength={6}
              required
            />

            <label htmlFor="password">Confirm Password:</label>
            <input
              name="confirmPass"
              id="confirmPass"
              type="password"
              value={formData.confirmPass}
              onChange={handleChange}
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
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                id="other"
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              Others
            </label>
          </div>

          {/* Select input  */}
          <div className="input-group">
            <label>Country:</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">--Select--</option>
              <option value="BD">Bangladesh</option>
              <option value="IN">India</option>
            </select>
          </div>

          {/* Textarea  input  */}
          <div className="input-group">
            <label>Bio:</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about you..."
              rows={6}
            />
          </div>

          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
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
        </form>
        {success && <p style={{ color: "green" }}>{success}</p>}
        {reset && <p style={{ color: "#FFF" }}>{reset}</p>}
      </div>
    </div>
  );
}
