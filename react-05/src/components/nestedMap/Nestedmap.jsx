const users = [
  {
    name: "sumit sarkar",
    dept: "CSE",
    semister: [
      { subjectOne: "HTML" },
      { subjectTwo: "JavaScript" },
      { subjectThree: "React JS" },
    ],
    phone: "+000111222",
  },
  {
    name: "Rana majumder",
    dept: "BBA",
    semister: [
      { subjectOne: "Business Study" },
      { subjectTwo: "Accounting" },
      { subjectThree: "Business Law" },
    ],
    phone: "+000111333",
  },
  {
    name: "Tanveer islam pavel",
    dept: "MBA",
    semister: [
      { subjectOne: "Masters of Accounting" },
      { subjectTwo: "Fundamental managment " },
    ],
    phone: "+000441221",
  },
];

const code = `
   const users = [
  {
    name: "sumit sarkar",
    dept: "CSE",
    semister: [
      { subjectOne: "HTML" },
      { subjectTwo: "JavaScript" },
      { subjectThree: "React JS" },
    ],
    phone: "+000111222",
  },`;
export default function Nestedmap() {
  return (
    <div className="nestedmap">
      <h2>
        <span>Example 4 :</span> Nested Map with array
      </h2>
      <pre>
        {code}
      </pre>
      <div className="container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <h3>Full Name : {user.name}</h3>
            <p>Department: {user.dept}</p>

            <ul className="article">
              {user.semister.map((semt, index) => (
                <li key={index} className="artNest">
                  Subject-{index + 1} :{semt.subjectOne}
                  {semt.subjectTwo}
                  {semt.subjectThree}
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

