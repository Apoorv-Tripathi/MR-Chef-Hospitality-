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
    <header className={`mch-nav-wrapper ${scrolled ? "is-scrolled" : ""}`}>
      {/* Top Corporate Agency Utility Bar */}
      <div className="mch-topbar">
        <div className="container-lux mch-topbar__inner">
          <div className="mch-topbar__left">
            <span className="mch-topbar__item">
              <i className="bi bi-geo-alt-fill text-gold" />
              <span>Mumbai &bull; Pan-India Delivery</span>
            </span>
            <span className="mch-topbar__divider">|</span>
            <span className="mch-topbar__item">
              <i className="bi bi-shield-check text-gold" />
              <span>ISO 9001:2015 Standards</span>
            </span>
          </div>

          <div className="mch-topbar__right">
            <a href="mailto:info@mrchefhospitality.com" className="mch-topbar__item">
              <i className="bi bi-envelope-fill text-gold" />
              <span>info@mrchefhospitality.com</span>
            </a>
            <span className="mch-topbar__divider">|</span>
            <a href="tel:+911234567890" className="mch-topbar__item mch-topbar__phone">
              <i className="bi bi-telephone-fill text-gold" />
              <span>+91 12345 67890</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mch-nav">
        <div className="container-lux mch-nav__inner">
          {/* Professional Agency Brand Logo (No circular MC badge) */}
          <Link to="/" className="mch-nav__brand" onClick={() => setMenuOpen(false)}>
            <div className="mch-nav__brand-symbol">
              <i className="bi bi-layers-half" />
            </div>
            <div className="mch-nav__brand-info">
              <span className="mch-nav__brand-title">MR CHEF</span>
              <span className="mch-nav__brand-subtitle">HOSPITALITY SERVICES</span>
            </div>
          </Link>

          {/* Nav Links */}
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

          {/* Right CTAs */}
          <div className="mch-nav__actions">
            <a href="tel:+911234567890" className="mch-nav__phone-link">
              <i className="bi bi-telephone-fill text-gold" />
              <span>+91 12345 67890</span>
            </a>
            <Link to="/contact" className="mch-nav__cta-btn">
              <span>Start Project</span>
              <i className="bi bi-arrow-up-right" />
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
      </div>

      {/* Mobile Menu Drawer */}
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
                transition={{ delay: 0.04 * i, duration: 0.35 }}
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
