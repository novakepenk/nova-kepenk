import React from "react";

// SENİN GALERİ FOTOĞRAFLARIN EKLENDİ
const galleryItems = [
  { id: 1, title: "Otomatik Kepenk Montajı", desc: "Kadıköy mağaza kepenk projemiz tamamlandı.", img: "/hotomontaj.jpg" },
  { id: 2, title: "Motor Değişimi", desc: "Şişli garaj kapısı yanan motorun sıfır değişim işlemi.", img: "/hmotormontaj.jpg" },
  { id: 3, title: "Alıcı Kart Tamiri", desc: "Beşiktaş otopark kepenk alıcı tamiri ve kumanda kopyalama.", img: "/hacilidegisim.jpg" },
  { id: 4, title: "Sıfır Kepenk", desc: "Ümraniye depo alanı için sıfırdan kepenk imalatı ve montajı.", img: "/hsifirkepenk.jpg" }
];

function Gallery() {
  return (
    <>
      <section className="page-header">
        <h1>İş Örneklerimiz</h1>
        <p>Tamamladığımız bazı projeler ve servis müdahalelerimiz.</p>
      </section>

      <section className="gallery">
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
      </section>
    </>
  );
}

export default Gallery;