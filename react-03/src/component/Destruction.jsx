

export default function Destruction(props) {
    const {titleText, titleDesc, titleLink} = props;
  return (
    <div>
        <div className="card-container">
              <div className="cards">
                <h4>some distructure formet</h4>
                <pre>
                    const name = ['dog', 'cat', ant];<br />
                    name[0];<br />
                    name[1];<br />
                    name[2];<br /><br />

                    <b>OR</b><br /><br />

                    const [dog, cat, ant] = name;<br />
                    const dog = name [0];<br />
                    const cat = name [1];<br />
                    const ant = name [2];<br />
                </pre>
            </div>
            <div className="cards">
                <h4 style={{textAlign:"center"}}>This is Destruction</h4>
                <h3 className="title">{titleText}</h3>
                <p className="decs">{titleDesc}</p>
                <a href="#" className="link">{titleLink}</a>
                

            </div>
          
           
        </div>
      
    </div>
  )
}
