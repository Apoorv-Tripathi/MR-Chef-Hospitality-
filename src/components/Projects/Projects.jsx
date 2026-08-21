import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Reveal from "../shared/Reveal";
import tapory from "../../assets/projects/tapory-tummy.jpg";
import queensPod from "../../assets/projects/queens-pod.jpg";
import platingPerfect from "../../assets/projects/plating-perfect.jpg";
import mayfair from "../../assets/projects/mayfair-hotel.jpg";
import royalOrbit from "../../assets/projects/royal-orbit.jpg";
import "./projects.css";

const CATEGORIES = ["All", "Hotels", "Restaurants"];

const PROJECTS = [
  {
    name: "Mayfair Hotel",
    category: "Hotels",
    location: "Patna, Bihar",
    img: mayfair,
    metric: "48 Keys + 400 Pax Banquet",
    highlight: "Turnkey F&B Masterplan & MEP Kitchen",
    duration: "90 Days Turnaround",
  },
  {
    name: "Queen's Pod Restaurant & Bar",
    category: "Restaurants",
    location: "Gangtok, Sikkim",
    img: queensPod,
    metric: "140 Covers Resto-Bar",
    highlight: "Concept, Beverage Program & Mountain Kitchen",
    duration: "Top-Rated Venue",
  },
  {
    name: "Tapory Tummy",
    category: "Restaurants",
    location: "Lucknow, UP",
    img: tapory,
    metric: "180 Covers Casual Dining",
    highlight: "High-Volume Production & Fast Service Flow",
    duration: "3.5x Table Turn Rate",
  },
  {
    name: "Royal Orbit Hotel 3-Star",
    category: "Hotels",
    location: "Banda, UP",
    img: royalOrbit,
    metric: "3-Star Hotel & Grand Lawn",
    highlight: "Turnkey Commercial Kitchens & Crew Hiring",
    duration: "75 Days to Launch",
  },
  {
    name: "Plating Perfect",
    category: "Restaurants",
    location: "Azamgarh, UP",
    img: platingPerfect,
    metric: "Gourmet Dining Venue",
    highlight: "Menu Engineering, Plating SOPs & Launch",
    duration: "Zero Opening Delays",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="mch-projects section bg-royal-lattice" id="projects">
      <div className="container-lux">
        <div className="mch-projects__head">
          <div>
            <Reveal>
              <div className="mch-projects__crest">
                <span className="badge-gold">
                  <i className="bi bi-award-fill" /> Delivered Turnkey Projects
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-projects__heading text-balance">
                Flagship Hospitality Venues Engineered by Mr Chef Services
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="royal-flourish">
                <i className="bi bi-gem" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mch-projects__sub text-muted-lux">
                Real operational success stories engineered from bare shell to profitable opening night.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/projects" className="btn-lux gold">
              Explore All Projects <i className="bi bi-arrow-up-right icon" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mch-projects__filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`mch-projects__filter ${filter === c ? "is-active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mch-projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mch-projects__card"
              >
                <div className="mch-projects__card-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className="ribbon-gold">
                    <i className="bi bi-stars" /> {p.duration}
                  </span>
                </div>

                <div className="mch-projects__card-meta">
                  <div className="mch-projects__card-stars" style={{ color: "var(--color-gold)", fontSize: "0.9rem", display: "flex", gap: "0.2rem", marginBottom: "0.4rem" }}>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>

                  <div className="mch-projects__card-top">
                    <div>
                      <span className="mch-projects__card-tag">{p.category}</span>
                      <h3 className="mch-projects__card-title">{p.name}</h3>
                    </div>
                    <span className="mch-projects__card-loc">
                      <i className="bi bi-geo-alt text-gold" /> {p.location}
                    </span>
                  </div>

                  <div className="mch-projects__card-details">
                    <div className="mch-projects__detail-row">
                      <i className="bi bi-bounding-box" />
                      <span>{p.metric}</span>
                    </div>
                    <div className="mch-projects__detail-row">
                      <i className="bi bi-check2-circle text-gold" />
                      <span>{p.highlight}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
