import Reveal from "../shared/Reveal";
import "./philosophy.css";

const VALUES = [
  { icon: "bi-bullseye", title: "Accountability", desc: "One team, start to finish. No handoffs to chase." },
  { icon: "bi-eye", title: "Honesty", desc: "We tell you when a concept won't work before you spend on it." },
  { icon: "bi-gem", title: "Craft", desc: "Every layout and hire held to the same exacting standard." },
  { icon: "bi-lightning-charge", title: "Speed", desc: "Deadlines are commitments, not estimates." },
];

export default function Philosophy() {
  return (
    <section className="mch-phil section" id="philosophy">
      <div className="container-lux">
        <div className="mch-phil__top">
          <Reveal className="mch-phil__block">
            <span className="mch-phil__label">Mission</span>
            <p>
              To give every hospitality venture we touch the operational
              foundation to survive its first year and thrive in its
              tenth — through disciplined planning, honest design, and
              hands-on execution.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mch-phil__block">
            <span className="mch-phil__label">Vision</span>
            <p>
              A hospitality industry where "consultant" means partner, not
              vendor — where the firms that design a space are still
              accountable for how it performs.
            </p>
          </Reveal>
        </div>

        <div className="mch-phil__values">
          <Reveal><p className="eyebrow">Our Values</p></Reveal>
          <div className="mch-phil__values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} y={20} className="mch-phil__value">
                <i className={`bi ${v.icon}`} />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
