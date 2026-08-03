import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../shared/Reveal";
import tapory from "../../assets/projects/tapory-tummy.jpg";
import queensPod from "../../assets/projects/queens-pod.jpg";
import platingPerfect from "../../assets/projects/plating-perfect.jpg";
import mayfair from "../../assets/projects/mayfair-hotel.jpg";
import royalOrbit from "../../assets/projects/royal-orbit.jpg";
import "./projectsGrid.css";

const CATEGORIES = ["All", "Hotels", "Restaurants"];

const PROJECTS = [
  { name: "Tapory Tummy", category: "Restaurants", location: "Lucknow", scope: "Concept, staffing & service setup", img: tapory },
  { name: "Queen's Pod Restaurant & Bar", category: "Restaurants", location: "Gangtok, Sikkim", scope: "Interiors, kitchen setup & staffing", img: queensPod },
  { name: "Plating Perfect", category: "Restaurants", location: "Azamgarh", scope: "Service training & staff recruitment", img: platingPerfect },
  { name: "Mayfair Hotel", category: "Hotels", location: "Patna", scope: "Kitchen setup & culinary staffing", img: mayfair },
  { name: "Royal Orbit Hotel 3 Star", category: "Hotels", location: "Banda", scope: "F&B operations & team training", img: royalOrbit },
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="mch-pg section">
      <div className="container-lux">
        <Reveal>
          <div className="mch-pg__filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`mch-pg__filter ${filter === c ? "is-active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mch-pg__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="mch-pg__card"
                onClick={() => setActive(p)}
              >
                <div className="mch-pg__card-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className="mch-pg__card-view">
                    <i className="bi bi-arrows-fullscreen" /> View Case Study
                  </span>
                </div>
                <div className="mch-pg__card-meta">
                  <div>
                    <h3>{p.name}</h3>
                    <span>{p.location}</span>
                  </div>
                  <span className="mch-pg__card-tag">{p.category}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="mch-pg__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="mch-pg__modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="mch-pg__modal-close" onClick={() => setActive(null)} aria-label="Close">
                <i className="bi bi-x-lg" />
              </button>
              <div className="mch-pg__modal-img">
                <img src={active.img} alt={active.name} />
              </div>
              <div className="mch-pg__modal-body">
                <span className="mch-pg__card-tag">{active.category}</span>
                <h3>{active.name}</h3>
                <p className="mch-pg__modal-loc">{active.location}</p>
                <p className="mch-pg__modal-scope"><strong>Scope:</strong> {active.scope}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
