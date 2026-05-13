import React from "react";

function Contact() {
  return (
    <>
      <section className="page-header">
        <h1>Bize Ulaşın</h1>
        <p>Acil kepenk servisi için 7/24 hizmetinizdeyiz.</p>
      </section>

      <section className="contact-page-section">
        <div className="contact-card-large">
          <div className="contact-icon">📞</div>
          <h2>Hemen Arayın</h2>
          <p>Kepenk arızanız mı var? Zaman kaybetmeden bizi arayın.</p>
          <a href="tel:05344428351" className="contact-number-large glow-text">0534 442 83 51</a>
          <p className="contact-address">İstanbul Geneli Gezici Mobil Servis</p>
          <a href="tel:05344428351" className="contact-action-btn glow-btn">Acil Servis İste</a>
        </div>
      </section>
    </>
  );
}

export default Contact;