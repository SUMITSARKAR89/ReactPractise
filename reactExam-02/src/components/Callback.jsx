

export default function Callback({onClick}) {
  return (
    <div>
        <div className="container">
            <h3>7. Function call back props</h3>
            <div className="card">
                <button onClick={onClick}>click me</button>
            </div>
        </div>
      
    </div>
  )
}
