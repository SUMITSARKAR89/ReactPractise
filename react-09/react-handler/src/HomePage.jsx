export default function HomePage({ goToSignUp }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
     
      <button onClick={goToSignUp} >Next ➡ Sign Up</button>
    </div>
  );
}
