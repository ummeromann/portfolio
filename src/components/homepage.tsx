export default function HomePage() {
  return (
    <div>
      <div className="container">
        {/* Left Section */}
        <div className="left-section">
          <h1>HELLO</h1>
          <h2>I&apos;m <strong>Umme Roman Syed</strong>, a Web Developer</h2>
          <p>
            Welcome to my web developer portfolio! I specialize in creating
            beautiful, responsive, and user-friendly websites. I have worked on
            a variety of web projects ranging from personal blogs to
            e-commerce platforms.
          </p>
          <div>
            <button className="hire-me">Hire Me</button>
          </div>
        </div>
        {/* Right Section */}
        <div className="right-section">
          <img src="/pic.jpg" alt="center" />
        </div>
      </div>
    </div>
  );
}
