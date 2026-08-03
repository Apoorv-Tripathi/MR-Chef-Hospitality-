import Reveal from "../shared/Reveal";
import "./whyChooseUs.css";

const REASONS = [
  { icon: "bi-award", title: "Experience", desc: "12+ years executing hospitality projects across formats and scales." },
  { icon: "bi-lightbulb", title: "Innovation", desc: "Concepts built around how guests actually behave, not trends." },
  { icon: "bi-gem", title: "Quality", desc: "Every material, layout, and hire held to one exacting standard." },
  { icon: "bi-people", title: "Professional Team", desc: "Architects, chefs, and operators working from a single brief." },
  { icon: "bi-headset", title: "Support", desc: "A single point of contact from day one through post-launch." },
  { icon: "bi-check2-circle", title: "Execution", desc: "We stay on-site until the numbers prove the concept works." },
];

export default function WhyChooseUs() {
  return (
    <section className="mch-why section">
      <div className="container-lux mch-why__grid">
        <div className="mch-why__intro">
          <Reveal><p className="eyebrow">Why Mr Chef Hospitality</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-why__heading text-balance">
              Consultants who stay until the doors open — and beyond.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mch-why__text">
              Most consultancies hand over a deck. We hand over a running
              business — staffed, trained, and generating covers.
            </p>
          </Reveal>
        </div>

        <div className="mch-why__cards">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.06}
              y={i % 2 === 0 ? 24 : 40}
              className="mch-why__card"
            >
              <i className={`bi ${r.icon}`} />
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
