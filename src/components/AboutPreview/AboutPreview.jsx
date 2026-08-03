import { Link } from "react-router-dom";
import Reveal from "../shared/Reveal";
import AnimatedCounter from "../shared/AnimatedCounter";
import "./aboutPreview.css";

const STATS = [
  { to: 10, suffix: "+", label: "Years Experience" },
  { to: 50, suffix: "+", label: "Projects Delivered" },
  { to: 10, suffix: "+", label: "Cities" },
  { to: 95, suffix: "%", label: "Client Satisfaction" },
];

export default function AboutPreview() {
  return (
    <section className="mch-about section" id="about">
      <div className="container-lux mch-about__grid">
        <Reveal className="mch-about__image-col" y={40}>
          <div className="mch-about__image-main">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
              alt="Architectural interior of a luxury hotel lobby"
              loading="lazy"
            />
          </div>
          <div className="mch-about__image-sub">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop"
              alt="Commercial kitchen design detail"
              loading="lazy"
            />
          </div>
          <div className="mch-about__badge">
            <span className="mch-about__badge-num">10+</span>
            <span className="mch-about__badge-text">Years building hospitality ventures</span>
          </div>
        </Reveal>

        <div className="mch-about__content-col">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-about__heading text-balance">
              A consultancy built by operators, not theorists.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mch-about__text">
              Mr Chef Hospitality partners with hotel groups, restaurateurs,
              and resort developers from the first sketch to opening night.
              We plan kitchens that hold up under Friday-night covers, design
              spaces that photograph as well as they operate, and recruit the
              teams that keep them running long after we've left the site.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mch-about__text">
              Concept development, F&amp;B operations, culinary consulting,
              interior design, and staffing — under one roof, one point of
              accountability, one standard of execution.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/about" className="btn-lux outline mch-about__cta">
              Our Story
              <i className="bi bi-arrow-up-right icon" />
            </Link>
          </Reveal>

          <div className="mch-about__stats">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08} y={16}>
                <div className="mch-about__stat">
                  <span className="mch-about__stat-num">
                    <AnimatedCounter to={s.to} suffix={s.suffix} />
                  </span>
                  <span className="mch-about__stat-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
