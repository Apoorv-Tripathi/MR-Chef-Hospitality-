import { Link } from "react-router-dom";
import Reveal from "../shared/Reveal";
import AnimatedCounter from "../shared/AnimatedCounter";
import "./aboutPreview.css";

const STATS = [
  { to: 10, suffix: "+", label: "Years Experience" },
  { to: 50, suffix: "+", label: "Venues Delivered" },
  { to: 150, prefix: "₹", suffix: "Cr+", label: "Asset Value" },
  { to: 98, suffix: "%", label: "On-Time Launch" },
];

const HIGHLIGHTS = [
  {
    icon: "bi-building-check",
    title: "Turnkey Accountability",
    desc: "We place project directors on your physical site until opening night.",
  },
  {
    icon: "bi-rulers",
    title: "Kitchen MEP & CAD",
    desc: "Engineered for 500+ covers with zero ventilation or plumbing bottlenecks.",
  },
  {
    icon: "bi-cash-stack",
    title: "15-20% Sourcing Save",
    desc: "Direct factory pricing on refrigeration, cooking ranges & tableware.",
  },
];

export default function AboutPreview() {
  return (
    <section className="mch-about section section-royal" id="about">
      <div className="container-lux">
        {/* Top Centered Section Header with Royal Flourish */}
        <div className="mch-about__head text-center">
          <Reveal>
            <div className="mch-about__crest">
              <span className="mch-about__crest-badge">
                <i className="bi bi-layers-half" /> MR CHEF HOSPITALITY SERVICES
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-about__heading text-balance">
              Hospitality Architecture &amp; Operations Built by Practitioners
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="royal-flourish">
              <i className="bi bi-gem" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mch-about__lead text-muted-lux text-balance">
              Most consultancies hand over a deck and walk away. Mr Chef Hospitality Services is a hands-on turnkey consultancy that partners with hotel owners, restaurateurs, and cloud kitchen operators from raw concrete to profitable opening night.
            </p>
          </Reveal>
        </div>

        {/* 3-Column Luxury Display (Story + Arch Frame + Concentric Pods) */}
        <div className="mch-about__showcase">
          {/* Left Narrative Column */}
          <div className="mch-about__story-col">
            <Reveal delay={0.1}>
              <h3 className="mch-about__subhead">Operator Heritage &amp; Single-Source Responsibility</h3>
              <p className="mch-about__text">
                Founded with a relentless commitment to operational excellence, we integrate spatial interior flow, MEP commercial kitchen design, chef headhunting, and financial yield controls under one single standard of execution.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mch-about__stats-row">
                {STATS.map((s, i) => (
                  <div key={i} className="mch-about__stat-item">
                    <span className="mch-about__stat-num text-gold">
                      {s.prefix}
                      <AnimatedCounter to={s.to} suffix={s.suffix} />
                    </span>
                    <span className="mch-about__stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Link to="/about" className="btn-lux gold mch-about__btn">
                Discover Our Heritage <i className="bi bi-arrow-up-right icon" />
              </Link>
            </Reveal>
          </div>

          {/* Center Arch Window Frame */}
          <Reveal delay={0.2} className="mch-about__arch-col">
            <div className="mch-about__arch-outer">
              <div className="mch-about__arch-badge">
                <span>★ ARCHITECTURAL EXCELLENCE ★</span>
              </div>
              <div className="arch-frame-gold mch-about__arch-window">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
                  alt="Luxury hospitality architectural interior"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Right Concentric Feature Pods */}
          <div className="mch-about__pods-col">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08} className="mch-about__pod-item">
                <div className="pod-concentric">
                  <i className={`bi ${h.icon}`} />
                </div>
                <div className="mch-about__pod-info">
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
