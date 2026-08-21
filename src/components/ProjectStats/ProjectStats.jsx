import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../shared/Reveal";
import "./projectStats.css";

const VENUE_OPTIONS = [
  {
    id: "restaurant",
    title: "Fine Dining & Bar",
    icon: "bi-cup-hot-fill",
    baseDays: 60,
    baseArea: 2500,
    deliverables: ["Full F&B Concept Plan", "Kitchen CAD Layout & Exhaust MEP", "Menu Engineering & Recipe Cards", "Executive Chef Sourcing", "Staff SOPs & Soft Launch"],
  },
  {
    id: "hotel",
    title: "Hotel & Boutique Resort",
    icon: "bi-building",
    baseDays: 120,
    baseArea: 12000,
    deliverables: ["Turnkey F&B Masterplan", "Multiple Kitchen Layouts & MEP", "Banqueting & In-Room Dining Ops", "Full Kitchen & Front Office Hiring", "Brand Positioning & Licensing"],
  },
  {
    id: "cloud-kitchen",
    title: "Cloud Kitchen Network",
    icon: "bi-cloud-fill",
    baseDays: 45,
    baseArea: 1800,
    deliverables: ["High-Throughput Kitchen Workflow", "Equipment BOQs & Sourcing", "Delivery Aggregator Packaging SOPs", "Line Cook Hiring & Training", "Central Recipe Standardization"],
  },
  {
    id: "cafe",
    title: "Cafe & Specialty Bistro",
    icon: "bi-shop",
    baseDays: 45,
    baseArea: 1200,
    deliverables: ["Beverage & Coffee Bar Design", "Bakery & Kitchen Equipment Specs", "Signature Menu & Vendor Costing", "Barista & Service Team Hiring", "Interior Aesthetic Guidance"],
  },
  {
    id: "comm-kitchen",
    title: "Commercial Base Kitchen",
    icon: "bi-fire",
    baseDays: 75,
    baseArea: 5000,
    deliverables: ["HACCP & Hygiene Workflow CAD", "Heavy Commercial Equipment Specs", "Cold Storage & Blast Chiller MEP", "Batch Production SOPs", "Quality Control Protocols"],
  },
];

const AREA_TIERS = [
  { label: "Boutique (1,000 - 2,500 sq.ft)", mult: 1, labelShort: "1,000 - 2,500 sq.ft" },
  { label: "Medium (2,500 - 6,000 sq.ft)", mult: 1.25, labelShort: "2,500 - 6,000 sq.ft" },
  { label: "Large (6,000 - 15,000 sq.ft)", mult: 1.5, labelShort: "6,000 - 15,000 sq.ft" },
  { label: "Flagship (15,000+ sq.ft)", mult: 1.8, labelShort: "15,000+ sq.ft" },
];

const MODULE_OPTIONS = [
  { id: "concept", label: "Concept & Feasibility", icon: "bi-lightbulb", days: 10 },
  { id: "kitchen", label: "Kitchen CAD & MEP Design", icon: "bi-rulers", days: 15 },
  { id: "interior", label: "Interior & Spatial Layout", icon: "bi-brush", days: 20 },
  { id: "menu", label: "Culinary & Menu Engineering", icon: "bi-egg-fried", days: 15 },
  { id: "staffing", label: "Executive Chef & Staff Hiring", icon: "bi-people", days: 25 },
  { id: "operations", label: "On-site SOPs & Launch Oversight", icon: "bi-flag", days: 15 },
];

export default function ProjectStats() {
  const [selectedVenue, setSelectedVenue] = useState(VENUE_OPTIONS[0]);
  const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);
  const [selectedModules, setSelectedModules] = useState(MODULE_OPTIONS.map((m) => m.id));
  const [customCity, setCustomCity] = useState("");

  // Listen to custom hero event
  useEffect(() => {
    const handler = (e) => {
      const vId = e.detail?.venueId;
      const found = VENUE_OPTIONS.find((v) => v.id === vId);
      if (found) setSelectedVenue(found);
    };
    window.addEventListener("mch-set-venue", handler);
    return () => window.removeEventListener("mch-set-venue", handler);
  }, []);

  const toggleModule = (id) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const calculation = useMemo(() => {
    const areaMultiplier = AREA_TIERS[selectedAreaIndex].mult;
    const modulesCount = selectedModules.length;
    const baseDuration = Math.round(selectedVenue.baseDays * areaMultiplier * (0.6 + 0.4 * (modulesCount / MODULE_OPTIONS.length)));

    const phases = [
      { name: "Phase 1: Concept & Kitchen CAD", span: `Weeks 1 - ${Math.max(2, Math.round(baseDuration / 28))}` },
      { name: "Phase 2: Fit-out & Equipment BOQs", span: `Weeks ${Math.round(baseDuration / 28) + 1} - ${Math.round(baseDuration / 14)}` },
      { name: "Phase 3: Culinary & Staff Training", span: `Weeks ${Math.round(baseDuration / 14) + 1} - ${Math.round(baseDuration / 8.5)}` },
      { name: "Phase 4: Dry Runs & Grand Opening", span: `Week ${Math.round(baseDuration / 7)}` },
    ];

    return {
      estimatedDays: baseDuration,
      estimatedWeeks: Math.ceil(baseDuration / 7),
      phases,
      selectedCount: modulesCount,
    };
  }, [selectedVenue, selectedAreaIndex, selectedModules]);

  const activeArea = AREA_TIERS[selectedAreaIndex];

  const waMessage = useMemo(() => {
    const selectedModuleNames = MODULE_OPTIONS.filter((m) => selectedModules.includes(m.id))
      .map((m) => m.label)
      .join(", ");
    return `Hi Mr Chef Hospitality Services, I calculated my project scope:\n• Venue: ${selectedVenue.title}\n• Scale: ${activeArea.labelShort}${customCity ? ` in ${customCity}` : ""}\n• Scope: ${selectedModuleNames}\n• Target Timeline: ~${calculation.estimatedWeeks} Weeks (${calculation.estimatedDays} Days)\n\nI would like to discuss next steps with your lead consultant.`;
  }, [selectedVenue, activeArea, selectedModules, customCity, calculation]);

  const waUrl = `https://wa.me/911234567890?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="mch-estimator section bg-royal-lattice" id="estimator">
      <div className="container-lux">
        <div className="mch-estimator__header text-center">
          <Reveal>
            <div className="mch-estimator__crest">
              <span className="badge-gold">
                <i className="bi bi-calculator-fill" /> Turnkey Scope Calculator
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-estimator__heading text-balance">
              Plan Your Hospitality Venture in 60 Seconds
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="royal-flourish">
              <i className="bi bi-shield-shaded" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mch-estimator__subtitle text-muted-lux text-balance">
              Configure your venue type, footprint, and consulting scope to get an instant
              turnaround roadmap, deliverable blueprint, and direct consultant brief.
            </p>
          </Reveal>
        </div>

        <div className="mch-estimator__grid">
          {/* Left Column: Interactive Inputs */}
          <Reveal className="mch-estimator__inputs">
            {/* Step 1: Venue Type */}
            <div className="mch-estimator__step">
              <div className="mch-estimator__step-head">
                <span className="mch-estimator__step-num">01</span>
                <div>
                  <h3>Select Venue Type</h3>
                  <p>Choose the model of your hospitality project</p>
                </div>
              </div>
              <div className="mch-estimator__venues">
                {VENUE_OPTIONS.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    className={`mch-estimator__venue-card ${
                      selectedVenue.id === v.id ? "is-active" : ""
                    }`}
                    onClick={() => setSelectedVenue(v)}
                  >
                    <i className={`bi ${v.icon}`} />
                    <span>{v.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Carpet Area Footprint */}
            <div className="mch-estimator__step">
              <div className="mch-estimator__step-head">
                <span className="mch-estimator__step-num">02</span>
                <div>
                  <h3>Carpet Area Scale</h3>
                  <p>Estimated size of the property or kitchen</p>
                </div>
              </div>
              <div className="mch-estimator__area-grid">
                {AREA_TIERS.map((tier, idx) => (
                  <button
                    key={tier.label}
                    type="button"
                    className={`mch-estimator__area-btn ${
                      selectedAreaIndex === idx ? "is-active" : ""
                    }`}
                    onClick={() => setSelectedAreaIndex(idx)}
                  >
                    <span>{tier.labelShort}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Required Consulting Modules */}
            <div className="mch-estimator__step">
              <div className="mch-estimator__step-head">
                <span className="mch-estimator__step-num">03</span>
                <div>
                  <h3>Consultancy Scope Needed</h3>
                  <p>Select all services you require assistance with</p>
                </div>
              </div>
              <div className="mch-estimator__modules-grid">
                {MODULE_OPTIONS.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      className={`mch-estimator__mod-chip ${isChecked ? "is-checked" : ""}`}
                      onClick={() => toggleModule(mod.id)}
                    >
                      <i className={`bi ${isChecked ? "bi-check2-circle" : mod.icon}`} />
                      <span>{mod.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional City Input */}
            <div className="mch-estimator__city-row">
              <label htmlFor="mch-city">
                <i className="bi bi-geo-alt-fill text-gold" /> Project Location (Optional):
              </label>
              <input
                id="mch-city"
                type="text"
                placeholder="e.g. Mumbai, Delhi, Lucknow, Patna, Gangtok..."
                value={customCity}
                onChange={(e) => setCustomCity(e.target.value)}
                className="mch-estimator__city-input"
              />
            </div>
          </Reveal>

          {/* Right Column: Live Calculation Box */}
          <Reveal delay={0.15} className="mch-estimator__output-wrap">
            <div className="mch-estimator__output-card glass-card-dark">
              <div className="mch-estimator__output-badge">
                <i className="bi bi-stars text-gold" />
                <span>Live Project Scope Calculation</span>
              </div>

              <div className="mch-estimator__summary-top">
                <span className="mch-estimator__venue-tag">{selectedVenue.title}</span>
                <span className="mch-estimator__scale-tag">{activeArea.labelShort}</span>
              </div>

              {/* Big Metric Display */}
              <div className="mch-estimator__timeline-box">
                <span className="mch-estimator__timeline-label">Projected Turnaround to Launch</span>
                <div className="mch-estimator__timeline-val">
                  ~{calculation.estimatedWeeks} <span>Weeks</span>
                </div>
                <p className="mch-estimator__timeline-sub">
                  ({calculation.estimatedDays} Estimated Calendar Days with Full On-Site Oversight)
                </p>
              </div>

              {/* Milestone Phases */}
              <div className="mch-estimator__phases">
                <h4>Execution Phase Milestones:</h4>
                <div className="mch-estimator__phases-list">
                  {calculation.phases.map((ph, idx) => (
                    <div key={idx} className="mch-estimator__phase-item">
                      <span className="mch-estimator__phase-dot" />
                      <span className="mch-estimator__phase-name">{ph.name}</span>
                      <span className="mch-estimator__phase-span">{ph.span}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Checklist Preview */}
              <div className="mch-estimator__deliverables">
                <h4>Core Turnkey Inclusions:</h4>
                <ul>
                  {selectedVenue.deliverables.map((item, i) => (
                    <li key={i}>
                      <i className="bi bi-check-lg" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct CTAs */}
              <div className="mch-estimator__cta-group">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lux gold w-100"
                >
                  <i className="bi bi-whatsapp" /> Send Scope to WhatsApp
                </a>
                <Link to="/contact" className="btn-lux outline-light w-100">
                  Book 1-on-1 Feasibility Review <i className="bi bi-arrow-up-right icon" />
                </Link>
              </div>

              <div className="mch-estimator__guarantee">
                <i className="bi bi-shield-check text-gold" />
                <span>100% Confidential • Fixed-Price Turnkey Guarantee</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
