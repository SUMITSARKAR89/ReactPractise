

export default function Bolean({online, offline}) {
  return (
    <div>
        <div className="container">
            <h3>Boolean props </h3>
            <div className="card">
                <p>{online ? "you are in" : "you are offline"}</p>
                <p>{offline ? "you are in" : "you are offline"}</p>
               

            </div>
        </div>
      
    </div>
  )
}
