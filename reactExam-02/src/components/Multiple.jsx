

export default function Multiple({username, email, contact}) {
  return (
    <>
       
        <div className="container">
             <h3>2. Multiple text props using inline CSS</h3>
            <div className="card">
                <p style={{fontWeight : "500" , color: "red"}}>My name is- {username}</p>
                <p style={{fontWeight : "500" , color: "red"}}>Company Email: {email}</p>
                <p style={{fontWeight : "500" , color: "red"}}>contact number: {contact}</p>
            </div>
        </div>
      
    </>
  )
}

