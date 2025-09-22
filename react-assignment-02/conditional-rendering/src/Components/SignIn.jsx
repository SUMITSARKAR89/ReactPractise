

const demo = `
একটি component folder তৈরি করো। যার ভেতরে দুইটা page থাকবে। 
class component file এর ভেতরে construction function বানাও। 
 construction function এ যেকোন একটি পেইজ render করো।
তিনটি পদ্ধতিতে render করে দেখাও.
1. (if/else),
2. element operator,
3. ternary oparator,
4. short cercit or And

`

export default function SignIn() {
  
  return (
    <>
    <h1 style={{textAlign : "center"}}> Conditional Rendering Assignment</h1>
       <pre style={{textAlign : "center"}}>{demo}</pre>
      <div className="signUp">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="btnSignup">
              Sign Up
            </button>
          </form>
        </div>
        
      </div>
      
    </>
  );
}
