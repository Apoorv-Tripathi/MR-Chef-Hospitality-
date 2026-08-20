import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../shared/Reveal";
import "./services.css";

const DISCIPLINES = [
  {
    id: "turnkey",
    title: "Turnkey Project Execution",
    badge: "Most Popular",
    tagline: "From bare concrete shell to a fully functioning grand opening.",
    desc: "We manage every contractor, architect, vendor, and permit on your behalf — delivering a turnkey venue on schedule and within budget.",
    deliverables: [
      "Location Feasibility & Target Market Analysis",
      "Concept Development & Brand Identity",
      "Architectural Civil & Interior Space Planning",
      "Vendor Procurement & BOQ Cost Control",
      "Soft Opening & Grand Launch Supervision",
    ],
    stat: "75 Days Average Turnaround",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "kitchen",
    title: "Commercial Kitchen & MEP Engineering",
    badge: "Core Expertise",
    tagline: "Ergonomic, high-capacity kitchens engineered for peak-volume rush.",
    desc: "We design high-efficiency kitchen workflows, CAD layouts, ventilation/exhaust MEP, and gas bank compliance to ensure zero bottleneck service.",
    deliverables: [
      "2D/3D Equipment CAD Layouts & MEP Schematics",
      "Exhaust Hood, Fresh Air & Gas Bank Calculations",
      "Equipment Specification & Direct Vendor Sourcing",
      "HACCP & Hygiene Compliance Workflows",
      "Cold Room & Storage Flow Optimization",
    ],
    stat: "15-20% Sourcing Cost Reduction",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "culinary",
    title: "Culinary Direction & Menu Systems",
    badge: "Signature Craft",
    tagline: "Signature menus engineered for food-cost margins and guest loyalty.",
    desc: "Our master chefs develop distinctive food and beverage concepts, standardize recipe costing sheets, and train your brigade for consistent excellence.",
    deliverables: [
      "Signature F&B Menu Conceptualization",
      "Recipe Standardization & Yield Costing Sheets",
      "Food Plating & Presentation Manuals",
      "Ingredient Vendor Sourcing & Supply Chain Setup",
      "Bar, Beverage & Cocktail Program Engineering",
    ],
    stat: "28-32% Controlled Food Cost",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "talent",
    title: "Executive Talent & Operations SOPs",
    badge: "Operational Mastery",
    tagline: "Recruiting and drilling the teams that sustain high guest satisfaction.",
    desc: "We headhunt executive chefs, restaurant general managers, and service staff, establishing rigorous operational SOPs, POS systems, and audit checks.",
    deliverables: [
      "Executive Chef & Department Head Headhunting",
      "Front-of-House & Service Protocol Training",
      "Inventory, POS & Billing Software Integration",
      "Standard Operating Procedures (SOP Manuals)",
      "90-Day Post-Opening Financial & Service Audits",
    ],
    stat: "92% Staff Retention Rate",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(DISCIPLINES[0]);

  return (
    <section className="mch-matrix section" id="services">
      <div className="container-lux">
        <div className="mch-matrix__head">
          <div>
            <Reveal>
              <p className="eyebrow">End-to-End Capabilities</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-matrix__heading text-balance">
                360° Turnkey Hospitaliy Solutions
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mch-matrix__sub text-muted-lux">
                One unified consultancy replacing 6 separate vendors. Every discipline engineered for operational profitability.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/services" className="btn-lux outline">
              View All 15 Services <i className="bi bi-arrow-up-right icon" />
            </Link>
          </Reveal>
        </div>

        {/* Tab Navigation */}
        <div className="mch-matrix__nav">
          {DISCIPLINES.map((d) => (
            <button
              key={d.id}
              type="button"
              className={`mch-matrix__tab-btn ${
                activeTab.id === d.id ? "is-active" : ""
              }`}
              onClick={() => setActiveTab(d)}
            >
              <span className="mch-matrix__tab-title">{d.title}</span>
              <span className="mch-matrix__tab-badge">{d.badge}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mch-matrix__display glass-card"
          >
            <div className="mch-matrix__content">
              <span className="badge-gold">{activeTab.badge}</span>
              <h3 className="mch-matrix__display-title">{activeTab.title}</h3>
              <p className="mch-matrix__tagline">{activeTab.tagline}</p>
              <p className="mch-matrix__desc">{activeTab.desc}</p>

              <div className="mch-matrix__checklist">
                <h4>Core Technical Deliverables:</h4>
                <ul>
                  {activeTab.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check-circle-fill text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mch-matrix__footer">
                <div className="mch-matrix__stat-pill">
                  <i className="bi bi-trophy-fill text-gold" />
                  <span>{activeTab.stat}</span>
                </div>
                <Link to="/contact" className="btn-lux primary sm">
                  Inquire For This Discipline <i className="bi bi-arrow-up-right icon" />
                </Link>
              </div>
            </div>

            <div className="mch-matrix__media">
              <img
                src={activeTab.img}
                alt={activeTab.title}
                className="mch-matrix__img"
                loading="lazy"
              />
              <div className="mch-matrix__media-overlay">
                <span>{activeTab.title}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
