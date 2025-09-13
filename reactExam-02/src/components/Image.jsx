export default function Image({ src, alt }) {
  return (
    <div>
      <div className="container">
        <h3>8. Image props </h3>
        <div className="card">
          <img src={src} alt={alt} width="100" />
        </div>
      </div>
    </div>
  );
}
