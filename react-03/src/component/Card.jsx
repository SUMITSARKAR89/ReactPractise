
const d = new Date ();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();

export default function Card(props) {
    
    
  return (
    <div>
        
        <div className="card-container">
            <div className="cards">
                <h3 className="title">{props.titleText}</h3>
                <p className="decs">{props.titleDesc}</p>
                <a href="#" className="link">{props.titleLink}</a>
                <p className="dates">
                    <span>{date}/</span>
                    <span>{month}/</span>
                    <span>{year}</span>
                </p>

            </div>
           
        </div>
      
    </div>
  )
}
