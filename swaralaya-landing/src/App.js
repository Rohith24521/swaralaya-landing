import './App.css';

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav>
        <ul>
          <li>Story</li>
          <li>Mission</li>
          <li>Contact</li>
          <li className="account">Account</li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <h1>
            Join the revolution of <br />
            <span>Telugu Music</span>
          </h1>
          <p>Download for Windows</p>
          <p>Download for Android</p>
        </div>
        <div className="hero-boxes">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
      </div>

      {/* STORY */}
      <div className="section">
        <h2>Story</h2>
        <p>
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
        <div className="watermark">कथा</div>
      </div>

      {/* MISSION */}
      <div className="section">
        <h2>Mission</h2>
        <p>
          At Swaralaya, our mission is simple yet powerful: to make Telugu
          karaoke accessible, enjoyable, and empowering for everyone. Whether
          you're a seasoned singer or someone who just loves to hum along to
          their favorite tunes, we believe that music has the power to bring
          people together, heal, and inspire.
        </p>
      </div>

      {/* VISION */}
      <div className="section vision">
        <h2>Vision</h2>
        <p>
          We envision a world where music knows no boundaries. A world where
          anyone, regardless of their background or skill level, can pick up
          a mic and sing their heart out. With Swaralaya, we're not just
          building a platform—we're building a movement to keep Telugu music
          alive and thriving for generations to come.
        </p>
        <div className="watermark-left">गम्यं</div>
      </div>

      {/* CONTACT */}
      <div className="contact">
        <h2>Contact</h2>
        <p>contact@swaralayastudios.com</p>
        <p className="location">Visakhapatnam, Andhra Pradesh, India</p>
      </div>

    </div>
  );
}

export default App;