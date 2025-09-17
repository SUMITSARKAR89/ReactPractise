import React from "react";
// A--------------- normal or default-----------------
// Ex:1 JSX version

function Hood() {
  return (
    <>
      <p className="ex">Ex:1 JSX version </p>
      <h3> hello</h3>
    </>
  );
}
// Ex:2 Under the hood
function Hood2() {
  return React.createElement("div", {}, 
    React.createElement("p", {className: "ex"}, "Ex:2 Under the hood"),
  React.createElement("h4", {}, "this is hood two"))
}

// B---------------------- nested --------------------
// Ex:3 JSX version
function NestedHood() {
  return (
    <><p className="ex"> Ex:3 JSX version</p>
    <div>
      <p> title</p>
      <p> this is description</p>
    </div>
    </>
  );
}

// Ex:4 Under the hood
function NestedHood2() {
  return React.createElement(
    "div", // parent element
    {},
    React.createElement("p", { className: "ex" }, "Ex:4 Under the hood"),
    React.createElement("p", {}, "title"),
    React.createElement("p", {}, "this is description")
  );
}

// C------------------using props------------------------
// Ex:5 JSX version

function User(props) {
  return <>
  <p className="ex">Ex:5 JSX version `(props)`</p>
  <p>Name: {props.name}</p>
  </>;
}

// Ex:6 Under the hood
function User2(props) {
  return React.createElement("div", {}, 
    React.createElement("p", {className: "ex"}, "Ex:6 Under the hood (props)"),
    React.createElement("p", {}, `Name: ${props.name}`)
  )
}

// D------------------Listed hood using MAP------------------------
// Ex:7 JSX version

function List() {
  const items = ["HTML", "CSS", "JavaScript"];
  return (
    <>
    <p className="ex">Ex:7 JSX version mapping</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
// Ex:8 Under the hood
function List2() {
  const items = ["HTML", "CSS", "JavaScript"];

  return React.createElement(
    "div",
    {},
    React.createElement("p", { className: "ex" }, "Ex:8 Under the hood"),
    React.createElement("ul", {},
      items.map((item, index) =>
        React.createElement("li", { key: index }, item)
      )
    )
  );
}
function App() {
  return (
    <>
      <h1>react component under the hood</h1>
      <Hood />
      <Hood2 /> <br /> <br />
      <NestedHood />
      <NestedHood2 /> <br /> <br />
      <User name="sumit sarkar"/>
      <User2 name="bappy sarkar"/> <br /><br />
      <List /> <br />
      <List2 />
    </>
  );
}

export default App;
