
const demo = `
 const score = 85;
 return(
 <>
 <h4 >
    {score >= 90
    ? "Grade A+"
    : score >= 70
    ? "Grade A"
    : score >= 50
    ? "Grade B "
    : "Fail"}
 </h4>
 </>
 )
`
export default function Nested() {
  const score = 85;
  return (
    <>
      <div className="state">
        <div>
          <h3>Ex:6 Nested  Condition </h3>
          <p>only one RETURN() function</p>
          <pre>{demo}</pre>
        </div>
        <h4 className="ans" style={{ color: "yellow" }}>
          {score >= 90
            ? "Grade A+"
            : score >= 70
            ? "Grade A"
            : score >= 50
            ? "Grade B "
            : "Fail"}
        </h4>
      </div>
    </>
  );
}
