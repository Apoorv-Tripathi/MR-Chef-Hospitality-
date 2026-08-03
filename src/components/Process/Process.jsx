import Reveal from "../shared/Reveal";
import "./process.css";

const PROCESS = [
  { num: "01", title: "Consultation", desc: "We study the site, the market, and your ambitions before proposing anything." },
  { num: "02", title: "Planning", desc: "Feasibility, budgets, and a realistic project timeline you can build against." },
  { num: "03", title: "Designing", desc: "Interior, kitchen, and brand design developed as one coherent system." },
  { num: "04", title: "Construction Support", desc: "On-site coordination between contractors, vendors, and your team." },
  { num: "05", title: "Recruitment", desc: "Sourcing and training chefs, managers, and service staff before opening." },
  { num: "06", title: "Operations", desc: "SOPs, inventory systems, and quality checks installed and tested." },
  { num: "07", title: "Launch", desc: "Soft opening, feedback loops, and a grand launch built on data." },
];

export default function Process() {
  return (
    <section className="mch-process section" id="process">
      <div className="container-lux">
        <div className="mch-process__head">
          <Reveal><p className="eyebrow">Our Process</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-process__heading text-balance">
              Seven stages. Zero guesswork.
            </h2>
          </Reveal>
        </div>

        <div className="mch-process__list">
          {PROCESS.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 0.05}
              y={24}
              className="mch-process__row"
            >
              <span className="mch-process__num">{p.num}</span>
              <div className="mch-process__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <span className="mch-process__line" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
