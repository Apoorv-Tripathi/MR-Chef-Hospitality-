import "./trustedClients.css";

const CLIENTS = [
  { name: "MAYFAIR HOTEL", city: "Patna", type: "Luxury Hotel & Banquet", icon: "bi-building-fill-check" },
  { name: "QUEEN'S POD", city: "Gangtok", type: "Resto-Bar & Lounge", icon: "bi-cup-hot-fill" },
  { name: "TAPORY TUMMY", city: "Lucknow", type: "Casual Dining Chain", icon: "bi-fire" },
  { name: "ROYAL ORBIT", city: "Banda", type: "3-Star Hotel & Resort", icon: "bi-stars" },
  { name: "PLATING PERFECT", city: "Azamgarh", type: "Gourmet Kitchen & Dining", icon: "bi-gem" },
];

export default function TrustedClients() {
  const loop = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section className="mch-trusted section-royal section-sm">
      <div className="container-lux mch-trusted__head text-center">
        <div className="royal-flourish">
          <i className="bi bi-shield-shaded" />
        </div>
        <h2 className="mch-trusted__label">TRUSTED BY PREMIER HOSPITALITY GROUPS &amp; RESTAURATEURS ACROSS INDIA</h2>
      </div>
      <div className="mch-trusted__track-wrap">
        <div className="mch-trusted__track">
          {loop.map((c, i) => (
            <div className="mch-trusted__card" key={i}>
              <div className="mch-trusted__card-icon">
                <i className={`bi ${c.icon}`} />
              </div>
              <div className="mch-trusted__card-body">
                <span className="mch-trusted__card-name">{c.name}</span>
                <span className="mch-trusted__card-meta">
                  <i className="bi bi-geo-alt text-gold" /> {c.city} • <span className="mch-trusted__card-type">{c.type}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
