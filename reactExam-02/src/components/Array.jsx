export default function Array({ items }) {
  return (
    <div>
      <div className="container">
        <h3>6. Array props</h3>
        <div className="card">
          <ul>
            {items.map((i, index) => (
              <li key={index}> {i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
