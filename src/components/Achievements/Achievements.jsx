import Reveal from "../shared/Reveal";
import AnimatedCounter from "../shared/AnimatedCounter";
import "./achievements.css";

const STATS = [
  { to: 50, suffix: "+", label: "Projects Delivered" },
  { to: 10, suffix: "+", label: "Cities" },
  { to: 20, suffix: "+", label: "Team Members" },
  { to: 95, suffix: "%", label: "Client Satisfaction" },
];

const EXPERTISE = [
  { title: "Food Production", org: "Central kitchen & production systems" },
  { title: "Kitchen Operations", org: "Layout, equipment & workflow planning" },
  { title: "Service Management", org: "Staff training & guest experience" },
];

export default function Achievements() {
  return (
    <section className="mch-ach section-sm">
      <div className="container-lux">
        <div className="mch-ach__stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} y={20} className="mch-ach__stat">
              <span className="mch-ach__stat-num">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </span>
              <span className="mch-ach__stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="mch-ach__recognitions">
          <Reveal><p className="eyebrow">Our Expertise</p></Reveal>
          <div className="mch-ach__list">
            {EXPERTISE.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06} y={16} className="mch-ach__row">
                <span className="mch-ach__row-title">{r.title}</span>
                <span className="mch-ach__row-org">{r.org}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
