import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../shared/Reveal";
import "./whyChooseUs.css";

const REASONS = [
  {
    icon: "bi-shield-fill-check",
    title: "On-Site Accountability",
    desc: "We don't just hand over a PowerPoint deck. Our project directors stay on your physical construction site until grand opening night.",
  },
  {
    icon: "bi-cash-coin",
    title: "15-20% Direct Sourcing Savings",
    desc: "Our established manufacturing tie-ups allow you to purchase stainless steel equipment, refrigeration, and tableware at direct factory rates.",
  },
  {
    icon: "bi-fire",
    title: "Culinary & Operator Heritage",
    desc: "Built by practicing chefs and F&B managers who have handled high-volume dinner covers — not theoretical corporate consultants.",
  },
  {
    icon: "bi-geo-alt-fill",
    title: "Proven Across Tier 1 to Tier 3 India",
    desc: "From mountain venues in Gangtok to luxury banquets in Patna and high-street bistros in Lucknow — our operational models adapt everywhere.",
  },
  {
    icon: "bi-people-fill",
    title: "Zero-Attrition Staffing Model",
    desc: "We test chef candidates in live commercial kitchens and conduct 14-day pre-launch service simulations before opening to guests.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "90-Day P&L Stabilization",
    desc: "We remain on call for 3 months after launch to audit recipe yield variances, reduce food cost waste, and maximize daily table turns.",
  },
];

const FAQS = [
  {
    q: "How does Mr Chef Hospitality Services save money on kitchen equipment & fit-out?",
    a: "Because we procure equipment for dozens of venues annually, we have direct OEM manufacturer relationships. We pass factory wholesale pricing directly to you without middleman markups, saving our clients 15-20% on overall kitchen CAPEX.",
  },
  {
    q: "Do you handle projects outside major metro cities?",
    a: "Absolutely. A significant portion of our portfolio includes Tier 2 & Tier 3 cities across North, East, and Central India (including Patna, Gangtok, Lucknow, Azamgarh, Banda, etc.). We deploy on-site project directors wherever your property is located.",
  },
  {
    q: "What is the difference between Turnkey Execution vs Advisory Consulting?",
    a: "Advisory Consulting provides layout drawings, feasibility studies, and menu recipes for your team to execute. Turnkey Execution means Mr Chef Hospitality Services manages everything from MEP contractor coordination and equipment fabrication to staff hiring, tastings, and opening night supervision.",
  },
  {
    q: "How do you ensure food costs remain within 28-32%?",
    a: "Every single dish on your menu is backed by a standardized recipe costing card with grams-level yield measurements. We train your kitchen brigade on portion scoops and prep batching to ensure zero unauthorized plate variance.",
  },
  {
    q: "How soon can we start once an agreement is signed?",
    a: "Our architectural and kitchen engineering team can mobilize within 3 to 5 business days to conduct initial site surveys and generate 2D conceptual zoning layouts.",
  },
];

export default function WhyChooseUs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="mch-why section" id="why-us">
      <div className="container-lux">
        {/* Why Choose Us Grid */}
        <div className="mch-why__grid">
          <div className="mch-why__intro">
            <Reveal>
              <p className="eyebrow">The Operator Advantage</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-why__heading text-balance">
                Consultants who stay until the doors open — and stay profitable.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mch-why__text text-muted-lux">
                Most consultancies deliver blueprints and leave you to manage vendors. We operate as your turnkey F&amp;B division from day one.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mch-why__cta-box">
                <Link to="/contact" className="btn-lux primary">
                  Start Your Project <i className="bi bi-arrow-up-right icon" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mch-why__cards">
            {REASONS.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 0.05}
                y={20}
                className="mch-why__card"
              >
                <div className="mch-why__card-icon">
                  <i className={`bi ${r.icon}`} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Investor & Owner FAQs */}
        <div className="mch-faq__wrap">
          <div className="mch-faq__header text-center">
            <Reveal>
              <p className="eyebrow">Common Questions</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-faq__heading text-balance">
                Frequently Asked Questions by Investors &amp; Owners
              </h2>
            </Reveal>
          </div>

          <div className="mch-faq__list">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={idx} delay={idx * 0.04} className="mch-faq__item">
                  <button
                    type="button"
                    className={`mch-faq__question ${isOpen ? "is-open" : ""}`}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <i className={`bi ${isOpen ? "bi-dash-circle-fill" : "bi-plus-circle"}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="mch-faq__answer"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
