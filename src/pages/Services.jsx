import React, { useState } from "react";
import { Link } from "react-router-dom";

// TÜM FOTOĞRAFLAR BURAYA DA EKLENDİ
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

const districts = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section className="page-header">
        <h1>Hizmetlerimiz</h1>
        <p>Tüm kepenk arızaları ve montaj işlemleri için profesyonel çözümler.</p>
      </section>

      <section className="services">
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card clickable-card" onClick={() => setSelectedService(service)}>
              {/* Resim çağırma kodu düzeltildi */}
              <img src={service.img} alt={service.title} className="service-img" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="click-to-read">Açıklamayı Oku</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* AÇILIR PENCERE (MODAL) */}
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

export default Services;