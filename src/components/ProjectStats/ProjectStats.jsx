import Reveal from "../shared/Reveal";
import AnimatedCounter from "../shared/AnimatedCounter";
import "./projectStats.css";

const STATS = [
  { to: 50, suffix: "+", label: "Projects Delivered" },
  { to: 10, suffix: "+", label: "Cities" },
  { to: 10, suffix: "+", label: "Years Experience" },
  { to: 95, suffix: "%", label: "Client Satisfaction" },
];

export default function ProjectStats() {
  return (
    <section className="mch-pstats section-sm">
      <div className="container-lux mch-pstats__grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} y={16} className="mch-pstats__item">
            <span className="mch-pstats__num">
              <AnimatedCounter to={s.to} suffix={s.suffix} />
            </span>
            <span className="mch-pstats__label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
