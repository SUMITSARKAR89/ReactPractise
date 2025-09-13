export default function Data(props) {
  return (
    <div>
      <div className="container">
        <h3>mapping data with JSON file <pre style={{color: "blue"}}>data.json</pre></h3>
        <div className="card">
          <h3 className="title">{props.titleText}</h3>
          <p className="decs">{props.titleDesc}</p>
          <a href="#" className="link">
            {props.titleLink}
          </a>
        </div>
      </div>
    </div>
  );
}
