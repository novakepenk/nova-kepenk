import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app-container">
      <header className="header">
        <Link to="/" className="logo" aria-label="Ana Sayfa">
          <img 
            src="/logo.png" 
            style={{ height: "80px", width: "auto", display: "block" }} 
            alt="Nova Kepenk Logo"
          />
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/hizmetler">Hizmetlerimiz</Link>
          <Link to="/galeri">İş Örnekleri</Link>
          <Link to="/iletisim">İletişim</Link>
          <a href="tel:05344428351" className="nav-call-btn glow-btn tech-cut">📞 Hemen Ara</a>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nova Kepenk</h3>
            <p>İstanbul geneli 7/24 garantili kepenk tamiri ve montaj servisi.</p>
          </div>
          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <Link to="/hizmetler">Hizmetlerimiz</Link>
            <Link to="/galeri">İş Örnekleri</Link>
            <Link to="/iletisim">İletişim</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Kepentra. Tüm Hakları Saklıdır.</p>
          <a href="https://denizdigitaloperate.com" target="_blank" rel="noopener noreferrer" className="developer-signature">
            Developed by Deniz Digital Operate
          </a>
        </div>
      </footer>

      <a href="tel:05344428351" className="floating-cta glow-btn">
        <span className="floating-icon">📞</span>
      </a>
    </div>
  );
}

export default App;