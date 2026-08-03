import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../shared/Reveal";
import "./services.css";

const SERVICES = [
  {
    icon: "bi-building-fill-check",
    title: "Hotel Consultancy",
    desc: "Feasibility, positioning & full operational planning for new hotels.",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-cup-hot-fill",
    title: "Restaurant Consultancy",
    desc: "Concept-to-launch guidance for independent & chain restaurants.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-cloud-fill",
    title: "Cloud Kitchen Setup",
    desc: "Delivery-first kitchen design built for speed & throughput.",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-shop",
    title: "Commercial Kitchen Design",
    desc: "Workflow-driven layouts for high-volume production kitchens.",
    img: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-brush",
    title: "Interior Consultation",
    desc: "Spaces that reflect brand identity without compromising flow.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-badge-ad",
    title: "Restaurant Branding",
    desc: "Naming, identity & guest experience design that travels.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-rulers",
    title: "Kitchen Planning",
    desc: "Layouts engineered for cover volume, safety & efficiency.",
    img: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-tools",
    title: "Equipment Planning",
    desc: "Right-sized, vetted equipment specs & vendor sourcing.",
    img: "https://images.unsplash.com/photo-1556910633-5099dc3671e4?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-person-badge",
    title: "Chef Hiring",
    desc: "Executive & head chef search matched to your concept.",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-people-fill",
    title: "Staff Recruitment",
    desc: "Front & back-of-house teams, trained and launch-ready.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-egg-fried",
    title: "Food Production",
    desc: "Central kitchen & production systems that hold quality at scale.",
    img: "https://images.unsplash.com/photo-1556910636-11c3f5b48d6e?q=80&w=900&auto=format&fit=crop",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Hospitality Operations",
    desc: "Ongoing operational oversight, audits & performance systems.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Services() {
  const [active, setActive] = useState(SERVICES[0]);

  return (
    <section className="mch-services section" id="services">
      <div className="container-lux">
        <div className="mch-services__head">
          <div>
            <Reveal>
              <p className="eyebrow">What We Do</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-services__heading text-balance">
                Fifteen disciplines. One accountable team.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/services" className="btn-lux outline">
              All Services <i className="bi bi-arrow-up-right icon" />
            </Link>
          </Reveal>
        </div>

        <div className="mch-services__body">
          <div className="mch-services__list">
            {SERVICES.map((s, i) => (
              <Reveal
                as="button"
                key={s.title}
                delay={i * 0.03}
                y={14}
                className={`mch-services__row ${active.title === s.title ? "is-active" : ""}`}
                onMouseEnter={() => setActive(s)}
                onFocus={() => setActive(s)}
              >
                <span className="mch-services__row-icon">
                  <i className={`bi ${s.icon}`} />
                </span>
                <span className="mch-services__row-title">{s.title}</span>
                <span className="mch-services__row-desc">{s.desc}</span>
                <span className="mch-services__row-arrow">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mch-services__preview">
            <img src={active.img} alt={active.title} key={active.title} />
            <div className="mch-services__preview-caption">
              <span>{active.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
