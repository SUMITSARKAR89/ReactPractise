

export default function Number({valueOne, valueTwo}) {
  return (
    <div>
        <div className="container">
            <h3>3. Number  props</h3>
            <div className="card">
                <p>Total price : $ {valueOne * 2}</p>
                <p>Total price : $ {valueTwo * 5}</p>
            </div>
        </div>
      
    </div>
  )
}
