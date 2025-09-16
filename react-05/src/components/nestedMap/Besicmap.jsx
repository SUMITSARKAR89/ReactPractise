
const fruits = ["Apple", "Banana", "Orange", "Mango"];
export default function Besicmap() {
  return (
    <div className="nestedmap">
        <h2><span>Example 1 : </span>Besic map</h2>
        <h4>Single array</h4>
        <pre>const fruits = ["Apple", "Banana", "Orange", "Mango"]</pre>
        <div className="container">

           <div className="card">
             {fruits.map((i, index) => 
            
                <li key={index}> {i}</li>
            
            )}
           </div>
            
        </div>
      
    </div>
  )
}
