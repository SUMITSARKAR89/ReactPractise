
const demo = `
export default function Logic() {
    const hasMail = true;
  return (
    <div>  
     {hasMail && <h4>your mail is send</h4>}
    </div>
  )
}
`
export default function Logic() {
    const hasMail = true;
  return (
    <div>
        <div className="state">
             <h3>Ex:3  Logic && AND </h3>
             <p>only one RETURN() function</p>
             <pre>{demo}</pre>
             <h4 >Inbox : Your massage</h4>
             {hasMail && <h4 className="ans" style={{color: " yellow"}}>your mail is send</h4>}
        </div>
      
    </div>
  )
}
