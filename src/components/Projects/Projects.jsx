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
  { name: "Tapory Tummy", category: "Restaurants", location: "Lucknow", img: tapory },
  { name: "Queen's Pod Restaurant & Bar", category: "Restaurants", location: "Gangtok, Sikkim", img: queensPod },
  { name: "Plating Perfect", category: "Restaurants", location: "Azamgarh", img: platingPerfect },
  { name: "Mayfair Hotel", category: "Hotels", location: "Patna", img: mayfair },
  { name: "Royal Orbit Hotel 3 Star", category: "Hotels", location: "Banda", img: royalOrbit },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="mch-projects section" id="projects">
      <div className="container-lux">
        <div className="mch-projects__head">
          <div>
            <Reveal><p className="eyebrow">Selected Work</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mch-projects__heading text-balance">
                Ventures we've helped bring to life.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/projects" className="btn-lux outline">
              Full Portfolio <i className="bi bi-arrow-up-right icon" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mch-projects__filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
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
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="mch-projects__card"
              >
                <div className="mch-projects__card-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="mch-projects__card-meta">
                  <div>
                    <h3>{p.name}</h3>
                    <span>{p.location}</span>
                  </div>
                  <span className="mch-projects__card-tag">{p.category}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
