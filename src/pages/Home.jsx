import React, { useState } from "react";
import { Link } from "react-router-dom";

// ==========================================
// 1. VERİLER
// ==========================================
const faqs = [
  {
    question: "Fiyatlar nasıl belirleniyor, sürpriz masraf çıkar mı?",
    answer: "Asla! Yerinde tespit yapıyor, size net ve dürüst bir fiyat veriyoruz. Onayınız olmadan işe başlamıyoruz. Gizli ücret veya sonradan çıkan sürpriz masraflar yoktur. Esnaf sözü."
  },
  {
    question: "Taktığınız motor ve parçalara ne kadar güveniyorsunuz?",
    answer: "Kullandığımız tüm kepenk motorları, beyin kartları ve elektronik aksamlar %100 orijinal ve en az 2 yıl tam garantilidir. Bozulan parçanın daima arkasındayız."
  },
  {
    question: "Aradığımda ne kadar sürede gelirsiniz?",
    answer: "İstanbul'un neresinde olursanız olun, mobil gezici araçlarımızla en kısa sürede adresinize ulaşıyoruz. Kepenginiz bozuk, dükkanınız açıkken sizi asla bekletmeyiz."
  }
];

const servicesList = [
  { title: "Otomatik Kepenk Montajı", desc: "İş yeriniz için sıfırdan ölçü alarak, yüksek kaliteli ve dayanıklı sistemler kuruyoruz.", img: "/montajsiz.jpg" },
  { title: "Otomatik Kepenk Tamiri", desc: "Sıkışan, raydan çıkan veya hasar gören kepenklerinizi ilk günkü haline getiriyoruz.", img: "/kepenktamir.jpg" },
  { title: "Otomatik Kepenk Bakımı", desc: "Mekanik ve motor arızalarının önüne geçmek için düzenli periyodik bakım yapıyoruz.", img: "/kepenkbakim.jpg" },
  { title: "Sıfır Kepenk Montajı", desc: "Eski tip manuel kepenklerinizi söküp yerine son teknoloji motorlu kepenkler takıyoruz.", img: "/sifirkepenk.jpg" },
  { title: "Kepenk Motor Tamiri", desc: "Çalışmayan, zorlanan veya ses yapan kepenk motorlarınızın onarımını yapıyoruz.", img: "/motortamir.jpg" },
  { title: "Kepenk Motor Değişimi", desc: "Ömrünü doldurmuş motorları, uzun ömürlü ve garantili sıfır motorlarla değiştiriyoruz.", img: "/motordegisim.jpg" },
  { title: "Kepenk Ups", desc: "Elektrik kesintilerinde kepenginizin çalışması için Kesintisiz Güç Kaynağı (UPS) takıyoruz.", img: "/upsb.jpg" },
  { title: "Kepenk Beyin Tamiri", desc: "Sistemin çalışmasını sağlayan ana kontrol kartı (beyin) arızalarını tespit edip onarıyoruz.", img: "/beyintamir.jpg" },
  { title: "Kepenk Alıcı Tamiri", desc: "Kumandadan gelen sinyalleri algılamayan alıcı kartlarını yeniliyor veya tamir ediyoruz.", img: "/alici.jpg" }
];

// SENİN GALERİ FOTOĞRAFLARIN BURAYA DA EKLENDİ
const galleryItems = [
  { id: 1, title: "Otomatik Kepenk Montajı", desc: "Kadıköy mağaza kepenk projemiz tamamlandı.", img: "/hotomontaj.jpg" },
  { id: 2, title: "Motor Değişimi", desc: "Şişli garaj kapısı yanan motorun sıfır değişim işlemi.", img: "/hmotormontaj.jpg" },
  { id: 3, title: "Alıcı Kart Tamiri", desc: "Beşiktaş otopark kepenk alıcı tamiri ve kumanda kopyalama.", img: "/hacilidegisim.jpg" },
  { id: 4, title: "Sıfır Kepenk", desc: "Ümraniye depo alanı için sıfırdan kepenk imalatı ve montajı.", img: "/hsifirkepenk.jpg" }
];

const districts = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"
];

// ==========================================
// 2. ANA SAYFA BİLEŞENİ
// ==========================================
function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      {/* 1. HERO (GİRİŞ) */}
      <section className="hero hero-with-bg">
        <div className="hero-content">
          <h1>Kepenk Arızalarında Hızlı ve Garantili Çözüm</h1>
          <p>
            Dükkanınızın veya garajınızın güvenliği riske girmesin. Yılların esnaf tecrübesi, orijinal yedek parça ve dürüst fiyat politikasıyla anında yanınızdayız. Bizi arayın, sorunu kökünden çözelim.
          </p>
          <a href="tel:05344428351" className="hero-btn glow-btn" aria-label="Hemen Ara">
            <span className="btn-icon">📞</span>
            0534 442 83 51
          </a>
          <div className="online-box">
            <span className="online-dot"></span>
            <span className="online-text">Ekibimiz Çevrimiçi - Çağrınızı Bekliyor</span>
          </div>
        </div>
      </section>

      {/* 2. HİZMETLERİMİZ */}
      <section className="services">
        <h2>Hizmetlerimiz</h2>
        <div className="services-grid">
          {servicesList.slice(0, 6).map((service, index) => (
            <div key={index} className="service-card clickable-card" onClick={() => setSelectedService(service)}>
              <img src={service.img} alt={service.title} className="service-img" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="click-to-read">Açıklamayı Oku</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link to="/hizmetler" className="hero-btn glow-btn tech-cut" style={{ display: "inline-flex", fontSize: "1rem", padding: "1rem 2rem" }}>
            Tüm Hizmetleri Gör
          </Link>
        </div>
      </section>

      {/* 3. GALERİ (İŞ ÖRNEKLERİ) */}
      <section className="gallery">
        <h2>İş Örneklerimiz</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-card">
              {/* Geçici resim linki silindi, senin resimlerin çağırılıyor */}
              <img src={item.img} alt={item.title} className="gallery-img" />
              <div className="gallery-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link to="/galeri" className="hero-btn glow-btn tech-cut" style={{ display: "inline-flex", fontSize: "1rem", padding: "1rem 2rem" }}>
            Tüm İş Örneklerini İncele
          </Link>
        </div>
      </section>

      {/* 4. SIK SORULAN SORULAR */}
      <section className="faq">
        <h2>Aklınızda Soru İşareti Kalmasın</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? "active" : ""}`} onClick={() => toggleFaq(index)}>
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEO İLÇELER ALANI */}
      <section className="seo-section">
        <h2>İstanbul Tüm İlçeler Kepenk Servisi</h2>
        <p className="seo-desc">Bulunduğunuz ilçeye tıklayarak acil servis talebinde bulunabilirsiniz.</p>
        <div className="districts-container">
          {districts.map((district, index) => (
            <React.Fragment key={index}>
              <Link to="/iletisim" className="district-tag">{district} Kepenk Tamiri</Link>
              <Link to="/iletisim" className="district-tag">{district} Kepenk Servisi</Link>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 6. İLETİŞİM (HIZLI ARAMA) */}
      <section className="contact-page-section" style={{ backgroundColor: "var(--bg)", borderTop: "2px solid var(--secondary)" }}>
        <div className="contact-card-large tech-cut">
          <div className="contact-icon">📞</div>
          <h2>Hemen Arayın</h2>
          <p>Kepenk arızanız mı var? Zaman kaybetmeden bizi arayın.</p>
          <a href="tel:05344428351" className="contact-number-large glow-text">0534 442 83 51</a>
          <p className="contact-address">İstanbul Geneli Gezici Mobil Servis</p>
          <a href="tel:05344428351" className="contact-action-btn glow-btn tech-cut">Acil Servis İste</a>
        </div>
      </section>

      {/* HİZMETLER İÇİN MODAL (AÇILIR PENCERE) */}
      {selectedService && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={selectedService.img} alt={selectedService.title} className="modal-img" />
            <h3>{selectedService.title}</h3>
            <p>{selectedService.desc}</p>
            <div className="modal-actions">
              <a href="tel:05344428351" className="modal-call-btn glow-btn tech-cut">📞 Hemen Ara</a>
              <button onClick={() => setSelectedService(null)} className="modal-close-btn tech-cut">Kapat</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;