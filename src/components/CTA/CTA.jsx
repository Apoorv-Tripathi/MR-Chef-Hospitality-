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
    <section className="mch-cta section-royal" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="mch-cta__glow" />
      <div className="container-lux mch-cta__inner">
        <Reveal>
          <span className="badge-gold mb-3">
            <i className="bi bi-calendar2-check-fill" /> Now Booking Q3/Q4 Project Inceptions
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mch-cta__heading text-balance">
            Ready to Build a High-Performing Hospitality Venue?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mch-cta__text text-balance">
            Whether you are launching a flagship hotel, a high-cover fine dining restaurant, or a multi-location cloud kitchen network — let’s engineer it for operational excellence and maximum profit.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mch-cta__actions">
            <Link to="/contact" className="btn-lux gold">
              Schedule Feasibility Call <i className="bi bi-arrow-up-right icon" />
            </Link>
            <a
              href="https://wa.me/911234567890?text=Hi%20Mr%20Chef%20Hospitality%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20for%20my%20new%20hospitality%20venture."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lux outline-light"
            >
              <i className="bi bi-whatsapp text-gold" /> WhatsApp Lead Consultant
            </a>
            <a href="tel:+911234567890" className="mch-cta__phone">
              <i className="bi bi-telephone-fill text-gold" /> +91 12345 67890
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
