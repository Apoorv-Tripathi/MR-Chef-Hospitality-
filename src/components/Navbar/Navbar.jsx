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
      {/* Main Navigation Bar */}
      <div className="mch-nav">
        <div className="container-lux mch-nav__inner">
          {/* Professional Agency Brand Logo */}
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
