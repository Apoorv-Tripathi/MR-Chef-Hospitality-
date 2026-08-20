import Reveal from "../shared/Reveal";
import "./process.css";

const PHASES = [
  {
    num: "01",
    timeline: "Weeks 1 - 2",
    title: "Market Feasibility & Concept Architecture",
    desc: "We analyze local demographic spending, competitor density, CAPEX/OPEX viability, and define your brand positioning before a single rupee is spent.",
    deliverable: "Feasibility Report, P&L Projection & Concept Brief",
    icon: "bi-clipboard-data",
  },
  {
    num: "02",
    timeline: "Weeks 3 - 5",
    title: "Kitchen CAD & MEP Engineering",
    desc: "Complete 2D/3D commercial kitchen engineering, exhaust & fresh air calculations, gas manifold compliance, and interior spatial dining flow.",
    deliverable: "CAD Layouts, Plumbing/Electrical MEP & HACCP Drawings",
    icon: "bi-rulers",
  },
  {
    num: "03",
    timeline: "Weeks 6 - 8",
    title: "Equipment Procurement & Fit-Out Oversight",
    desc: "We provide vetted vendor BOQs with direct factory-pricing discounts (saving 15-20%) and supervise on-site contractors to eliminate rework delays.",
    deliverable: "Itemized Equipment BOQs & Site Supervision Logs",
    icon: "bi-tools",
  },
  {
    num: "04",
    timeline: "Weeks 8 - 10",
    title: "Culinary R&D & Menu Engineering",
    desc: "Master chef kitchen trials, signature dish conceptualization, food-cost yield cards (aiming for 28-32% margin), and plating manuals.",
    deliverable: "Recipe Master Sheets, Costing Cards & Bar Program",
    icon: "bi-egg-fried",
  },
  {
    num: "05",
    timeline: "Weeks 9 - 11",
    title: "Executive Staffing & Hospitality SOPs",
    desc: "Headhunting Executive Chefs and service crew, installing billing/inventory POS software, and conducting 14-day intensive service drills.",
    deliverable: "Hired Crew, Role SOP Manuals & Billing POS Setup",
    icon: "bi-people",
  },
  {
    num: "06",
    timeline: "Week 12",
    title: "Dry Run, Soft Opening & Grand Launch",
    desc: "Stress-testing kitchen output under simulated peak covers, invitation-only tastings, guest feedback iteration, and seamless grand opening.",
    deliverable: "100-Point Pre-Opening Audit & Opening Night Management",
    icon: "bi-flag-fill",
  },
  {
    num: "07",
    timeline: "Post-Launch 90 Days",
    title: "P&L Stabilization & Operational Audits",
    desc: "We remain engaged for 90 days after opening to audit food wastage, table turnover velocity, vendor pricing, and stabilize profitability.",
    deliverable: "Monthly Variance Audits & Performance Report",
    icon: "bi-graph-up-arrow",
  },
];

export default function Process() {
  return (
    <section className="mch-process section section-alt" id="process">
      <div className="container-lux">
        <div className="mch-process__head">
          <div>
            <Reveal>
              <p className="eyebrow">The Mr Chef Turnkey Standard</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-process__heading text-balance">
                Seven Disciplined Phases. Zero Opening Guesswork.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="mch-process__sub text-muted-lux">
              From day one through 90 days post-opening, our structured execution roadmap eliminates costly site delays and ensures your venue opens profitably.
            </p>
          </Reveal>
        </div>

        <div className="mch-process__grid">
          {PHASES.map((p, i) => (
            <Reveal
              key={p.num}
              delay={i * 0.05}
              y={24}
              className="mch-process__card"
            >
              <div className="mch-process__card-top">
                <span className="mch-process__num">{p.num}</span>
                <span className="mch-process__timeline">
                  <i className="bi bi-clock-history" /> {p.timeline}
                </span>
              </div>

              <div className="mch-process__body">
                <div className="mch-process__icon-wrap">
                  <i className={`bi ${p.icon}`} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>

              <div className="mch-process__deliv">
                <strong>Deliverable:</strong>
                <span>{p.deliverable}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
