import './App.css';

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Swaralaya" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li>Story</li>
          <li>Mission</li>
          <li>Contact</li>
          <li className="account">Account</li>
        </ul>
      </nav>

      {/* HERO - SECTION 1 */}
      <div className="hero">

        <div className="rect rect-1"></div>
        <div className="rect rect-2"></div>
        <div className="rect rect-3"></div>

        <div className="hero-right">
          <img src="/singers.png" alt="singers" className="singers-img" />
        </div>

        <div className="hero-left">
          <h1 className="hero-title-black">Join the revolution of</h1>
          <h1 className="hero-title-gold">Telugu Music</h1>
          <p className="download-link">Download for Windows</p>
          <p className="download-link download-android">Download for Android</p>
        </div>

      </div>

      {/* STORY - SECTION 2 */}
      <div className="story-section">
        <img src="/musician.png" alt="musician" className="story-img" />
        <div className="story-content">
          <h2 className="story-title">Story</h2>
          <div className="story-body">
            <div className="story-border"></div>
            <p className="story-text">
              Swaralaya was born out of a deep love for Telugu music and a desire
              to create a space where music enthusiasts could come together to
              celebrate their passion. As lifelong fans of Telugu cinema and its
              soulful melodies, we noticed a gap—there was no dedicated platform
              for Telugu karaoke lovers to sing, record, and share their favorite
              songs.
              <br /><br />
              In 2023, we set out to change that. Swaralaya started as a simple
              idea: to create a platform where anyone, anywhere, could connect
              with the rich musical heritage of Telugu culture. Today, it has
              grown into a vibrant community of singers, music lovers, and
              dreamers who share one thing in common—their love for Telugu music.
            </p>
          </div>
        </div>
      </div>

      {/* MISSION + VISION - SECTION 3 */}
      <div className="mv-section">
        <img src="/drummer.png" alt="drummer" className="mv-img" />
        <div className="mv-text">
          <div className="mission-block">
            <h2 className="section-title">Mission</h2>
            <p className="section-text">
              At Swaralaya, our mission is simple yet powerful: to make Telugu
              karaoke accessible, enjoyable, and empowering for everyone. Whether
              you're a seasoned singer or someone who just loves to hum along to
              their favorite tunes, we believe that music has the power to bring
              people together, heal, and inspire.
            </p>
          </div>
          <div className="vision-block">
            <h2 className="section-title">Vision</h2>
            <p className="section-text">
              We envision a world where music knows no boundaries. A world where
              anyone, regardless of their background or skill level, can pick up
              a mic and sing their heart out. With Swaralaya, we're not just
              building a platform—we're building a movement to keep Telugu music
              alive and thriving for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact-section">
        <div className="contact-text">
          <h2 className="section-title">Contact</h2>
          <p className="contact-email">contact@swaralayastudios.com</p>
          <p className="contact-location">Visakhapatnam, Andhra Pradesh, India</p>
        </div>
        <img src="/lady.png" alt="lady" className="lady-img" />
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Software Agreement</span>
        </div>
        <div className="footer-right">
          © Swaralaya Studios. All Rights Reserved
        </div>
      </footer>

    </div>
  );
}

export default App;