import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./navbar.css";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`mch-nav ${scrolled ? "is-solid" : ""}`}>
      <div className="container-lux mch-nav__inner">
        <Link to="/" className="mch-nav__brand" onClick={() => setMenuOpen(false)}>
          <span className="mch-nav__brand-mark">MC</span>
          <span className="mch-nav__brand-text">
            Mr Chef <em>Hospitality</em>
          </span>
        </Link>

        <nav className="mch-nav__links">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `mch-nav__link ${isActive ? "is-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mch-nav__actions">
          <a href="tel:+911234567890" className="mch-nav__phone-link">
            <i className="bi bi-telephone-fill text-gold" />
            <span>+91 12345 67890</span>
          </a>
          <Link to="/contact" className="btn-lux primary mch-nav__cta sm">
            Start Project
          </Link>
          <button
            className={`mch-nav__burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mch-nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `mch-nav__mobile-link ${isActive ? "is-active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <div className="mch-nav__mobile-actions">
              <a href="tel:+911234567890" className="mch-nav__mobile-phone">
                <i className="bi bi-telephone-fill text-gold" /> Call: +91 12345 67890
              </a>
              <Link
                to="/contact"
                className="btn-lux primary w-100 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
