const demo = `const users = [
   { id: 1, name: "sumit sarkar", dept: "CSE" },
    { id: 2, name: "Tanveer islam pavel", dept: "EEE" },
    { id: 3, name: "Rana majumder", dept: "BBA" }
  ];`;

const users = [
  { id: 1, name: "sumit sarkar", dept: "CSE" },
  { id: 2, name: "Tanveer islam pavel", dept: "EEE" },
  { id: 3, name: "Rana majumder", dept: "BBA" },
];
export default function Obejectmap() {
  return (
    <div className="nestedmap">
      <h2>
        <span>Example 2 : </span>Mapping an Array of Objects
      </h2>
      <pre> {demo}</pre>
      <h3>Student List</h3>
      <div className="container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <h4 style={{color: "red"}}>Student ID: {user.id}</h4>
            <h3>{user.name}</h3>
            <p>Department: {user.dept}</p>
          </div>
        ))}
       
      </div>
    </div>
  );
}
