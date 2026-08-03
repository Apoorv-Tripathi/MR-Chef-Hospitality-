import { useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "../shared/Reveal";
import "./cta.css";

export default function CTA() {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="mch-cta" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="mch-cta__glow" />
      <div className="container-lux mch-cta__inner">
        <Reveal>
          <p className="eyebrow light">Let's Build Something</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mch-cta__heading text-balance">
            Have a hospitality venture in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mch-cta__text">
            Tell us what you're building. We'll tell you exactly what it
            takes to open it right.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mch-cta__actions">
            <Link to="/contact" className="btn-lux primary">
              Start Your Project <i className="bi bi-arrow-up-right icon" />
            </Link>
            <a href="tel:+911234567890" className="mch-cta__phone">
              <i className="bi bi-telephone" /> +91 12345 67890
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
