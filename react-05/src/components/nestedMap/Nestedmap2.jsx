const users = [
  {
    name: "sumit sarkar",
    dept: "CSE",
    semister: ["HTML", "JavaScript", "React JS"],
    phone: "+000111222",
  },
  {
    name: "Rana majumder",
    dept: "BBA",
    semister: ["Business Study", "Accounting", "Business Law"],
    phone: "+000111333",
  },
  {
    name: "Tanveer islam pavel",
    dept: "MBA",
    semister: ["Masters of Accounting", "Fundamental managment"],
    phone: "+000441221",
  },
];
const code = `
    const users = [
  {
    name: "sumit sarkar",
    dept: "CSE",
    semister: ["HTML", "JavaScript", "React JS"],
    phone: "+000111222",
  },`;
export default function Nestedmap2() {
  return (
    <div className="nestedmap">
      <h2>
        <span>Example 5 :</span> Nested Map with Object
      </h2>
      <pre>{code}</pre>
      <div className="container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <h3>Full Name : {user.name}</h3>
            <p>Department: {user.dept}</p>

            <ul className="article">
              {user.semister.map((sub, i) => (
                <li key={i}>
                  Sub-{i + 1}: {sub}
                </li>
              ))}
            </ul>

            <p>Phone: {user.phone}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}

