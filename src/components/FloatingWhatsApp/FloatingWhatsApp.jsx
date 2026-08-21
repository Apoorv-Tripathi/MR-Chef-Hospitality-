import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./floatingWhatsApp.css";

const PHONE = "911234567890";
const MESSAGE = "Hi Mr Chef Hospitality Services, I'd like to consult regarding a new hospitality project.";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  const handleEstimatorClick = (e) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("estimator");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="mch-dock" aria-label="Quick Contact Dock">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mch-dock__menu"
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mch-dock__item is-wa"
            >
              <i className="bi bi-whatsapp" />
              <div>
                <strong>WhatsApp Direct</strong>
                <span>Instant response in 15 mins</span>
              </div>
            </a>

            <a href="tel:+911234567890" className="mch-dock__item is-phone">
              <i className="bi bi-telephone-fill" />
              <div>
                <strong>Call Lead Consultant</strong>
                <span>+91 12345 67890</span>
              </div>
            </a>

            <a
              href={isHome ? "#estimator" : "/#estimator"}
              onClick={handleEstimatorClick}
              className="mch-dock__item is-calc"
            >
              <i className="bi bi-calculator-fill" />
              <div>
                <strong>Scope &amp; ROI Estimator</strong>
                <span>Calculate 60-second plan</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        type="button"
        className={`mch-dock__trigger ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Quick Contact Menu"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="mch-dock__ring" />
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-chat-dots-fill"}`} />
        <span className="mch-dock__label">{isOpen ? "Close" : "Talk to Expert"}</span>
      </motion.button>
    </aside>
  );
}
