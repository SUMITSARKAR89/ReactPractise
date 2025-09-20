

export default function Home() {
  return (
    <div>
      <header>
        <div className="logo">
          <h2>logo</h2>
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <div className="content">
        <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6557420216a456cfaef685c0_6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpg" alt="Home Image" />
        <h1>Welcome to My Website</h1>
        <p>This is a simple home page with a logo, navigation, and buttons.</p>

        <div className="btn-group">
          <a href="signup.html" className="btn btn-primary">Sign Up</a>
          <a href="#" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </div>
  )
}
