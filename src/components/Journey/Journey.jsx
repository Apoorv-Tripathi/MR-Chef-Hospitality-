import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../shared/Reveal";
import "./journey.css";

const TRANSFORMATIONS = [
  {
    id: "mayfair",
    client: "Mayfair Hotel & Banquet",
    city: "Patna, Bihar",
    scale: "18,000 sq.ft • 48 Keys + 400-Pax Banquet",
    challenge: "Empty concrete commercial shell with no MEP infrastructure, gas manifold, or kitchen exhaust planning.",
    solution: "Designed twin commercial kitchens (A-la-carte + Banquet), engineered central exhaust & fresh air HVAC, and recruited the full 34-member hospitality crew.",
    metric1: "90 Days",
    metric1Sub: "Turnkey Execution",
    metric2: "100% Launch",
    metric2Sub: "On-Time Banquet Booking",
    imgBefore: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop",
    imgAfter: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "queens",
    client: "Queen's Pod Resto-Bar",
    city: "Gangtok, Sikkim",
    scale: "4,200 sq.ft • 140 Covers + Mountain Deck Bar",
    challenge: "Difficult high-altitude terrain, limited local equipment suppliers, and complex kitchen ventilation requirements.",
    solution: "Custom precision stainless steel fabrication, engineered high-efficiency kitchen exhaust, curated signature cocktail menu, and trained local staff.",
    metric1: "#1 Rated",
    metric1Sub: "Resto-Bar in Region",
    metric2: "42%",
    metric2Sub: "Beverage Gross Margin",
    imgBefore: "https://images.unsplash.com/photo-1541888946425-d0fbb18015f6?q=80&w=900&auto=format&fit=crop",
    imgAfter: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "tapory",
    client: "Tapory Tummy Dining",
    city: "Lucknow, Uttar Pradesh",
    scale: "5,500 sq.ft • 180 Covers Casual Dining",
    challenge: "Severe kitchen bottleneck during peak 8-10 PM dinner rush, leading to high order wait times and ticket errors.",
    solution: "Re-engineered kitchen workflow layout with dedicated assembly lines, batch sauce standardizations, and digital KDS POS integration.",
    metric1: "3.5x",
    metric1Sub: "Daily Table Turn Rate",
    metric2: "-22%",
    metric2Sub: "Food Waste Reduction",
    imgBefore: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=900&auto=format&fit=crop",
    imgAfter: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Journey() {
  const [activeCase, setActiveCase] = useState(TRANSFORMATIONS[0]);
  const [viewMode, setViewMode] = useState("after"); // 'after' or 'before'

  return (
    <section className="mch-trans section" id="transformation">
      <div className="container-lux">
        <div className="mch-trans__head">
          <div>
            <Reveal>
              <p className="eyebrow">Real Operational ROI</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-trans__heading text-balance">
                Blueprint to Reality: The Turnkey Transformation
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mch-trans__sub text-muted-lux">
                How our engineering, culinary systems, and hands-on site management turn raw sites into market-leading venues.
              </p>
            </Reveal>
          </div>

          {/* Case selector tabs */}
          <div className="mch-trans__pills">
            {TRANSFORMATIONS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`mch-trans__pill ${activeCase.id === t.id ? "is-active" : ""}`}
                onClick={() => setActiveCase(t)}
              >
                <span>{t.client}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Transformation Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mch-trans__card glass-card"
          >
            {/* Visual Media Column */}
            <div className="mch-trans__media-col">
              <div className="mch-trans__img-wrap">
                <img
                  src={viewMode === "after" ? activeCase.imgAfter : activeCase.imgBefore}
                  alt={activeCase.client}
                  className="mch-trans__img"
                />
                <div className="mch-trans__view-toggle">
                  <button
                    type="button"
                    className={`mch-trans__toggle-btn ${viewMode === "before" ? "is-active" : ""}`}
                    onClick={() => setViewMode("before")}
                  >
                    Raw Site / Shell
                  </button>
                  <button
                    type="button"
                    className={`mch-trans__toggle-btn ${viewMode === "after" ? "is-active" : ""}`}
                    onClick={() => setViewMode("after")}
                  >
                    Grand Opening
                  </button>
                </div>
              </div>
            </div>

            {/* Case Details Column */}
            <div className="mch-trans__info-col">
              <div className="mch-trans__client-top">
                <span className="badge-gold">Verified Case Study</span>
                <h3 className="mch-trans__client-name">{activeCase.client}</h3>
                <p className="mch-trans__meta">
                  <i className="bi bi-geo-alt-fill text-gold" /> {activeCase.city} • {activeCase.scale}
                </p>
              </div>

              <div className="mch-trans__story">
                <div className="mch-trans__story-box">
                  <strong>
                    <i className="bi bi-exclamation-circle text-gold" /> The Challenge:
                  </strong>
                  <p>{activeCase.challenge}</p>
                </div>

                <div className="mch-trans__story-box">
                  <strong>
                    <i className="bi bi-check-circle-fill" style={{ color: "#25D366" }} /> The Mr Chef Services Solution:
                  </strong>
                  <p>{activeCase.solution}</p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mch-trans__metrics-row">
                <div className="mch-trans__metric-card">
                  <span className="mch-trans__metric-val">{activeCase.metric1}</span>
                  <span className="mch-trans__metric-sub">{activeCase.metric1Sub}</span>
                </div>
                <div className="mch-trans__metric-card">
                  <span className="mch-trans__metric-val">{activeCase.metric2}</span>
                  <span className="mch-trans__metric-sub">{activeCase.metric2Sub}</span>
                </div>
              </div>

              <div className="mch-trans__actions">
                <Link to="/contact" className="btn-lux primary sm">
                  Build a Similar Venture <i className="bi bi-arrow-up-right icon" />
                </Link>
                <a
                  href={`https://wa.me/911234567890?text=${encodeURIComponent(
                    `Hi Mr Chef Hospitality Services, I saw the case study for ${activeCase.client} (${activeCase.city}). I'd like to discuss a similar project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lux outline sm"
                >
                  <i className="bi bi-whatsapp text-gold" /> Discuss on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
