import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Menü kapatma ve üste kaydırma efekti
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // ==========================================
  // CLICKGUARD RADAR SİSTEMİ (TÜM SİTEYİ KORUR)
  // ==========================================
  useEffect(() => {
    // 1. URI'den gclid (Google Click ID) parametresini yakala
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid');

    // 2. Eğer gclid yoksa (organik trafikse) pas geç
    if (!gclid) return;

    // 3. Render.com üzerindeki yeni İstanbul canlı sunucu adresimiz
    const BACKEND_URL = 'https://kepentra-clickguard-istanbul.onrender.com/api/track';

    // 4. Avın verilerini topla
    const data = {
      gclid: gclid,
      userAgent: navigator.userAgent,
      fingerprint: btoa(navigator.userAgent + window.screen.width + window.screen.height).substring(0, 20)
    };

    // 5. Veriyi backend'e fırlat
    fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(() => console.log('ClickGuard: Tüm Site Kalkanı Devrede - Av Yakalandı'))
    .catch(err => console.error('ClickGuard: Sunucuya ulaşılamadı', err));
  }, []); // Sadece site ilk açıldığında çalışır

  return (
    <div className="app-container">
      {/* HEADER VE MENÜ */}
      <header className="header">
        <Link to="/" className="logo" aria-label="Ana Sayfa">
          <img 
            src="/logo.png" 
            style={{ height: "80px", width: "auto", display: "block" }} 
            alt="Logo"
          />
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menüyü Aç">
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

      {/* SAYFALARIN DEĞİŞTİĞİ ANA EKRAN */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>

      {/* GENİŞLETİLMİŞ SEO FOOTER */}
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
          <div className="footer-section">
            <h3>Hizmetler (SEO)</h3>
            <Link to="/hizmetler">Otomatik Kepenk Tamiri</Link>
            <Link to="/hizmetler">Kepenk Motor Değişimi</Link>
            <Link to="/hizmetler">Kumanda ve Alıcı Tamiri</Link>
            <Link to="/hizmetler">Sıfır Kepenk Montajı</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Nova Kepenk. Tüm Hakları Saklıdır.</p>
          <a href="https://denizdigitaloperate.com" target="_blank" rel="noopener noreferrer" className="developer-signature">
            Developed by Deniz Digital Operate
          </a>
        </div>
      </footer>

      {/* SABİT ARAMA BUTONU */}
      <a href="tel:05344428351" className="floating-cta glow-btn" aria-label="Acil Ara">
        <span className="floating-icon">📞</span>
      </a>
    </div>
  );
}

export default App;