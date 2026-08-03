import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import "./testimonials.css";

const TESTIMONIALS = [
  {
    quote: "They planned our kitchen for the covers we do on our worst night, not our average one. Two years in, it still hasn't buckled.",
    name: "Aarav Mehta",
    role: "Owner, Ember House",
  },
  {
    quote: "From feasibility study to staffed opening in eleven months. Every deadline they gave us, they hit.",
    name: "Priya Nataraj",
    role: "Director, Copperleaf Resorts",
  },
  {
    quote: "We've worked with three consultancies before. Mr Chef Hospitality was the first to stay past the ribbon-cutting.",
    name: "Farhan Qureshi",
    role: "CEO, Cloud Nine Kitchens",
  },
  {
    quote: "The recruitment alone paid for the engagement. Our head chef and GM are still with us four years later.",
    name: "Leela Ramanathan",
    role: "Founder, Marigold Collection",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="mch-testimonials section">
      <div className="container-lux">
        <Reveal><p className="eyebrow">Client Voices</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mch-testimonials__heading text-balance">
            What partners say after opening night.
          </h2>
        </Reveal>

        <div className="mch-testimonials__stage">
          <i className="bi bi-quote mch-testimonials__mark" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mch-testimonials__card"
            >
              <p className="mch-testimonials__quote">"{t.quote}"</p>
              <div className="mch-testimonials__person">
                <span className="mch-testimonials__avatar">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mch-testimonials__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`mch-testimonials__dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
