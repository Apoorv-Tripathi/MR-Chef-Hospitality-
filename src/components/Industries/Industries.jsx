import Reveal from "../shared/Reveal";
import "./industries.css";

const INDUSTRIES = [
  { num: "01", name: "Hotels", desc: "Full-service & boutique properties." },
  { num: "02", name: "Luxury Resorts", desc: "Destination & wellness resorts." },
  { num: "03", name: "Restaurants", desc: "Casual to fine dining concepts." },
  { num: "04", name: "Fine Dining", desc: "Chef-led, experience-first venues." },
  { num: "05", name: "Quick Service", desc: "High-velocity QSR formats." },
  { num: "06", name: "Cloud Kitchens", desc: "Delivery-only production models." },
  { num: "07", name: "Corporate Kitchens", desc: "Employee dining & cafeterias." },
  { num: "08", name: "Institutional Kitchens", desc: "Large-scale catering operations." },
  { num: "09", name: "Healthcare Hospitality", desc: "Patient & staff dining services." },
  { num: "10", name: "Educational Institutions", desc: "Campus dining & hostel kitchens." },
];

export default function Industries() {
  return (
    <section className="mch-industries section">
      <div className="container-lux">
        <div className="mch-industries__head">
          <Reveal><p className="eyebrow light">Who We Serve</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-industries__heading text-balance">
              Ten industries. One standard of execution.
            </h2>
          </Reveal>
        </div>

        <div className="mch-industries__grid">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.03} y={16} className="mch-industries__item">
              <span className="mch-industries__num">{ind.num}</span>
              <h3>{ind.name}</h3>
              <p>{ind.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
