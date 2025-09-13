

export default function Object({user}) {
  return (
    <div>
        <div className="container">
            <h3>5. object props</h3>
            <div className="card">
                <p>my name is {user.name}</p>
                <p>i am {user.age} years old</p>
            </div>
        </div>
      
    </div>
  )
}
