import Reveal from "../shared/Reveal";
import "./companyTimeline.css";

const MILESTONES = [
  { year: "2015", title: "Mr Chef Hospitality Services founded", desc: "Started with a focus on professional kitchen and hospitality consulting." },
  { year: "2018", title: "Recruitment desk added", desc: "Staffing became a core discipline alongside consulting." },
  { year: "2021", title: "Expanded across states", desc: "Took on hotel and restaurant projects beyond our home base." },
  { year: "2026", title: "Today", desc: "A hands-on team of consultants, chefs, and recruiters working across India." },
];

export default function CompanyTimeline() {
  return (
    <section className="mch-ctl section" id="timeline">
      <div className="container-lux">
        <Reveal><p className="eyebrow light">Our History</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mch-ctl__heading text-balance">
            A decade of hands-on hospitality work.
          </h2>
        </Reveal>

        <div className="mch-ctl__list">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.05} y={20} className="mch-ctl__row">
              <span className="mch-ctl__year">{m.year}</span>
              <div className="mch-ctl__dot-col">
                <span className="mch-ctl__dot" />
                {i < MILESTONES.length - 1 && <span className="mch-ctl__connector" />}
              </div>
              <div className="mch-ctl__body">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
