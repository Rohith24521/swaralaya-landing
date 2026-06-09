import { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import TermsOfService    from './pages/TermsOfService';
import PrivacyPolicy     from './pages/PrivacyPolicy';
import SoftwareAgreement from './pages/SoftwareAgreement';

// ── Placeholder URLs — replace with real links later ──
const DOWNLOAD_WINDOWS_URL = '#download-windows';
const DOWNLOAD_ANDROID_URL = '#download-android';

// ── Landing page ──
function LandingPage() {

  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    const sections = ['story', 'mission', 'contact'];
    let current = '';
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        current = id;
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownload = (platform) => {
    console.log(`Download triggered for: ${platform}`);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="logo">
          <a href="/" aria-label="Swaralaya home">
            <img src="/logo.png" alt="Swaralaya logo" className="logo-img" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className={`nav-btn${activeSection === 'story' ? ' nav-active' : ''}`}
              onClick={() => scrollTo('story')}
              aria-label="Go to Story section"
            >Story</button>
          </li>
          <li>
            <button
              className={`nav-btn${activeSection === 'mission' ? ' nav-active' : ''}`}
              onClick={() => scrollTo('mission')}
              aria-label="Go to Mission section"
            >Mission</button>
          </li>
          <li>
            <button
              className={`nav-btn${activeSection === 'contact' ? ' nav-active' : ''}`}
              onClick={() => scrollTo('contact')}
              aria-label="Go to Contact section"
            >Contact</button>
          </li>
          <li>
            <a href="#account" className="account nav-btn" aria-label="Go to Account page">Account</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" aria-label="Hero section">
        <div className="rect rect-1" aria-hidden="true"></div>
        <div className="rect rect-2" aria-hidden="true"></div>
        <div className="rect rect-3" aria-hidden="true"></div>
        <div className="hero-right" aria-hidden="true">
          <img src="/singers.png" alt="" className="singers-img" loading="eager" decoding="async" />
        </div>
        <div className="hero-left">
          <h1 className="hero-title-black">Join the revolution of</h1>
          <h1 className="hero-title-gold">Telugu Music</h1>
          <a
            href={DOWNLOAD_WINDOWS_URL}
            className="download-link download-btn"
            aria-label="Download Swaralaya for Windows"
            onClick={(e) => { e.preventDefault(); handleDownload('Windows'); }}
          >Download for Windows</a>
          <a
            href={DOWNLOAD_ANDROID_URL}
            className="download-link download-android download-btn"
            aria-label="Download Swaralaya for Android"
            onClick={(e) => { e.preventDefault(); handleDownload('Android'); }}
          >Download for Android</a>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="story-section" aria-label="Our story">
        <img src="/musician.png" alt="" className="story-img" loading="lazy" decoding="async" aria-hidden="true" />
        <div className="story-content">
          <h2 className="story-title">Story</h2>
          <div className="story-body">
            <div className="story-border" aria-hidden="true"></div>
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
      </section>

      {/* MISSION + VISION */}
      <section id="mission" className="mv-section" aria-label="Mission and Vision">
        <img src="/drummer.png" alt="" className="mv-img" loading="lazy" decoding="async" aria-hidden="true" />
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
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section" aria-label="Contact information">
        <div className="contact-text">
          <h2 className="section-title">Contact</h2>
          <a
            href="mailto:contact@swaralayastudios.com"
            className="contact-email"
            aria-label="Send email to contact@swaralayastudios.com"
          >contact@swaralayastudios.com</a>
          <p className="contact-location">Visakhapatnam, Andhra Pradesh, India</p>
        </div>
        <img src="/lady.png" alt="" className="lady-img" loading="lazy" decoding="async" aria-hidden="true" />
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer-left">
          <a href="/terms"     className="footer-link" aria-label="Read Terms of Service">Terms of Service</a>
          <a href="/privacy"   className="footer-link" aria-label="Read Privacy Policy">Privacy Policy</a>
          <a href="/agreement" className="footer-link" aria-label="Read Software Agreement">Software Agreement</a>
        </div>
        <div className="footer-right">
          © Swaralaya Studios. All Rights Reserved
        </div>
      </footer>

    </div>
  );
}

// ── Root App with Router ──
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"          element={<LandingPage />} />
        <Route path="/terms"     element={<TermsOfService />} />
        <Route path="/privacy"   element={<PrivacyPolicy />} />
        <Route path="/agreement" element={<SoftwareAgreement />} />
      </Routes>
    </Router>
  );
}

export default App;
