import Reveal from "../shared/Reveal";
import "./legalContent.css";

export default function LegalContent({ updated, sections }) {
  return (
    <section className="mch-legal section-sm">
      <div className="container-lux mch-legal__inner">
        <Reveal>
          <p className="mch-legal__updated">Last updated: {updated}</p>
        </Reveal>
        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={i * 0.03} y={14} className="mch-legal__block">
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
