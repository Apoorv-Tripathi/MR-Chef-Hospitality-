import Reveal from "../shared/Reveal";
import "./serviceCategories.css";

const GROUPS = [
  {
    label: "Concept & Consultancy",
    services: [
      {
        icon: "bi-building-fill-check",
        title: "Hotel Consultancy",
        desc: "Feasibility studies, positioning, and full operational planning for new and repositioned hotel properties.",
        benefits: ["Market feasibility", "Revenue modelling", "Brand positioning"],
      },
      {
        icon: "bi-cup-hot-fill",
        title: "Restaurant Consultancy",
        desc: "End-to-end guidance for independent restaurants and multi-outlet chains, from concept to unit economics.",
        benefits: ["Concept validation", "Unit economics", "Format strategy"],
      },
      {
        icon: "bi-cloud-fill",
        title: "Cloud Kitchen Setup",
        desc: "Delivery-first kitchen design and launch strategy built for aggregator platforms and speed.",
        benefits: ["Multi-brand layouts", "Platform strategy", "Delivery SOPs"],
      },
    ],
  },
  {
    label: "Design & Build",
    services: [
      {
        icon: "bi-shop",
        title: "Commercial Kitchen Design",
        desc: "Workflow-driven layouts engineered for high-volume production kitchens and central facilities.",
        benefits: ["Workflow mapping", "Compliance-ready", "Scalable layouts"],
      },
      {
        icon: "bi-brush",
        title: "Interior Consultation",
        desc: "Spaces that reflect brand identity while staying practical to clean, maintain, and operate at scale.",
        benefits: ["Brand-led design", "Material sourcing", "Vendor liaison"],
      },
      {
        icon: "bi-badge-ad",
        title: "Restaurant Branding",
        desc: "Naming, visual identity, and guest experience design that travels consistently across outlets.",
        benefits: ["Naming & identity", "Menu design", "Guest journey"],
      },
      {
        icon: "bi-rulers",
        title: "Kitchen Planning",
        desc: "Layouts engineered around real cover volume, safety codes, and staff movement efficiency.",
        benefits: ["Cover-based sizing", "Safety compliance", "Flow optimisation"],
      },
      {
        icon: "bi-tools",
        title: "Equipment Planning",
        desc: "Right-sized, vetted equipment specifications with sourcing across trusted vendor networks.",
        benefits: ["Vendor sourcing", "Spec documentation", "Budget control"],
      },
    ],
  },
  {
    label: "People & Operations",
    services: [
      {
        icon: "bi-person-badge",
        title: "Chef Hiring",
        desc: "Executive and head chef search matched precisely to your concept, cuisine, and volume.",
        benefits: ["Targeted search", "Skills vetting", "Trial placement"],
      },
      {
        icon: "bi-people-fill",
        title: "Staff Recruitment",
        desc: "Front and back-of-house teams sourced, screened, and trained before opening day.",
        benefits: ["Bulk hiring", "Pre-launch training", "Role mapping"],
      },
      {
        icon: "bi-egg-fried",
        title: "Food Production",
        desc: "Central kitchen and production systems designed to hold consistent quality at scale.",
        benefits: ["Recipe standardisation", "Batch systems", "Quality control"],
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Hospitality Operations",
        desc: "Ongoing operational oversight, performance audits, and systems that outlast the launch team.",
        benefits: ["Performance audits", "Systems setup", "Ongoing support"],
      },
      {
        icon: "bi-journal-text",
        title: "Menu Engineering",
        desc: "Data-led menu design balancing guest appeal, food cost, and kitchen throughput.",
        benefits: ["Cost analysis", "Guest testing", "Margin optimisation"],
      },
      {
        icon: "bi-clipboard-check",
        title: "SOP Development",
        desc: "Documented standard operating procedures so quality doesn't depend on any one person.",
        benefits: ["Role-specific SOPs", "Training manuals", "Audit checklists"],
      },
      {
        icon: "bi-diagram-3",
        title: "Turnkey Hospitality Solutions",
        desc: "Every discipline above, delivered as one accountable engagement from concept to launch.",
        benefits: ["Single point of contact", "Fixed timelines", "Post-launch support"],
      },
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="mch-svc-cat section">
      <div className="container-lux">
        {GROUPS.map((group, gi) => (
          <div className="mch-svc-cat__group" key={group.label}>
            <Reveal className="mch-svc-cat__group-head">
              <span className="mch-svc-cat__group-num">
                {String(gi + 1).padStart(2, "0")}
              </span>
              <h2>{group.label}</h2>
            </Reveal>

            <div className="mch-svc-cat__grid">
              {group.services.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 0.05}
                  y={20}
                  className="mch-svc-cat__card"
                >
                  <i className={`bi ${s.icon}`} />
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.benefits.map((b) => (
                      <li key={b}>
                        <i className="bi bi-check2" /> {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
