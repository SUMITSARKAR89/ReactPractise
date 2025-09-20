
const demo = `
export default funftion Ternery (){
const inDarkmood = true ;
return(
    <>
        {isDarkmood ? <p>Light Mode </p> : h4>Dark Mode </h4>}
    </>
)
}`

export default function Ternery() {
    const isDarkmood = true;
  return (
    <div>
        <div className="state">
             <h3>Ex:2 Ternery Logic (condition ? true : false)</h3>
             <p>only one RETURN() function</p>
             <pre>{demo}</pre>
             {isDarkmood ? <h4 className="ans" style={{color: " yellow"}}>Light Mode ☀️</h4> : <h4>Dark Mode 🌙</h4>}

        </div>

      
    </div>
  )
}
