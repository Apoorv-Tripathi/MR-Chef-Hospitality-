import { useState } from "react";
import Reveal from "../shared/Reveal";
import "./careerContent.css";

const PERKS = ["Health cover", "Learning budget", "Project bonuses", "Flexible leave"];

const ROLES = [
  { title: "Senior Kitchen Designer", location: "Mumbai · Full-time", dept: "Design" },
  { title: "F&B Operations Consultant", location: "Bengaluru · Full-time", dept: "Operations" },
  { title: "Recruitment Associate", location: "Delhi NCR · Full-time", dept: "People" },
  { title: "Interior Design Intern", location: "Remote · Internship", dept: "Design" },
];

export default function CareerContent() {
  const [applying, setApplying] = useState(null);

  return (
    <>
      <section className="mch-career section-sm">
        <div className="container-lux mch-career__culture">
          <Reveal className="mch-career__culture-text">
            <p className="eyebrow">Life Here</p>
            <h2>Built by operators — we hire people who like solving real problems.</h2>
          </Reveal>
          <Reveal delay={0.08} className="mch-career__perks">
            {PERKS.map((p) => (
              <span key={p}><i className="bi bi-check2" /> {p}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mch-career-roles section-sm">
        <div className="container-lux">
          <Reveal><p className="eyebrow">Open Positions</p></Reveal>
          <div className="mch-career-roles__list">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05} y={16} className="mch-career-roles__row">
                <div>
                  <h3>{r.title}</h3>
                  <span>{r.location}</span>
                </div>
                <button className="btn-lux outline" onClick={() => setApplying(r)}>
                  Apply
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {applying && (
        <div className="mch-apply-backdrop" onClick={() => setApplying(null)}>
          <div className="mch-apply-modal" onClick={(e) => e.stopPropagation()}>
            <button className="mch-apply-close" onClick={() => setApplying(null)} aria-label="Close">
              <i className="bi bi-x-lg" />
            </button>
            <h3>Apply — {applying.title}</h3>
            <form onSubmit={(e) => { e.preventDefault(); setApplying(null); }}>
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Email address" required />
              <input type="url" placeholder="Portfolio / LinkedIn (optional)" />
              <textarea placeholder="A line or two about yourself" rows={3} />
              <button type="submit" className="btn-lux primary">
                Submit Application <i className="bi bi-arrow-up-right icon" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
