const demo = `const students = [
    {
      id: 1,
      name: "Sumit",
      subjects: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      name: "Rahim",
      subjects: ["C", "C++", "Python"],
    },
  ];`;

const students = [
  {
    id: 1,
    name: "Sumit",
    subjects: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Rahim",
    subjects: ["C", "C++", "Python"],
  },
];

export default function Arraymap() {
  return (
    <div>
      <h2>
        <span>Example 3 : </span>Nested Mapping (Array inside Array)
      </h2>
      <h4>Nested array</h4>
      <pre>{demo}</pre>
      <div className="container">
        {students.map((student, index) => (
          <div className="card" key={index}>
            <h4>{student.id}</h4>
            <h3>{student.name}</h3>
            <ul>
                {student.subjects.map((sub, index) =>
                <li key={index}>{sub}</li>
                )}
                
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
