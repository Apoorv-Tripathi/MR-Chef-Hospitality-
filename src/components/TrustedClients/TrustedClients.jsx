import "./trustedClients.css";

const CLIENTS = [
  "Tapory Tummy", "Queen's Pod Restaurant & Bar", "Plating Perfect",
  "Mayfair Hotel", "Royal Orbit Hotel",
];

export default function TrustedClients() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section className="mch-trusted section-sm">
      <div className="container-lux">
        <p className="mch-trusted__label">Trusted by hospitality brands across India</p>
      </div>
      <div className="mch-trusted__track-wrap">
        <div className="mch-trusted__track">
          {loop.map((name, i) => (
            <span className="mch-trusted__item" key={i}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
