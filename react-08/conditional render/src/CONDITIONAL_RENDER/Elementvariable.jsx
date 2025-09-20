
const demo = `
 const isOnline = true;
    let status;
    if(isOnline){
       status = <p>You are in Online 🟢</p>
    }else{
        status = <p>You are Offline 🔴</p>
    }
  return (
        <h4 style={{color : "yellow"}}>{status}</h4>
  )
`

export default function Elementvariable() {
    const isOnline = true;
    let status;
    if(isOnline){
       status = <p>You are in Online 🟢</p>
    }else{
        status = <p>You are Offline 🔴</p>
    }
  return (
    <>
    <div className="state">
        <div >
             <h3>Ex:5  Elements variable Condition </h3>
             <p>only one RETURN() function</p>
             <pre>{demo}</pre>
             
        </div>
        <h4 className="ans" style={{color : "yellow"}}>{status}</h4>
          
    </div>
    </>
  )
}
