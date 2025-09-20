const demo = `
const age = 20;
let message;

if (age >= 18){
    message = "you are a Teenager"
}else{
    message =" you are ubderage"
}
    return (
    <>
        <P>{message} </P>
    </>
    )
`

export default function InlineVariable() {
    const age = 20;
    let message;
    if(age >= 18){
        message = "you are a Teenager"
    }else{
        message = "you are underage"
    }
  return (
    <>
    <div className="state">
        <div >
             <h3>Ex:4  Inline variable Condition </h3>
             <p>only one RETURN() function</p>
             <pre>{demo}</pre>
             
        </div>
        <h4 className="ans" style={{color : "yellow"}}>{message}</h4>  
    </div>
    </>
  )
}
