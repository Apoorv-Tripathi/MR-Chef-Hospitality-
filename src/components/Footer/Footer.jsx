import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="mch-footer section-royal">
      <div className="container-lux mch-footer__top">
        <div className="mch-footer__brand">
          <Link to="/" className="mch-footer__logo">
            <span className="mch-footer__logo-mark">MC</span>
            <span>
              Mr Chef <em>Hospitality</em>
            </span>
          </Link>
          <p>
            Full-spectrum turnkey hospitality consultancy — concept feasibility, CAD kitchen engineering, executive talent recruitment, and operational systems for hotels, restaurants, resorts, and cloud kitchens across India.
          </p>
          <div className="mch-footer__contacts">
            <a href="tel:+911234567890">
              <i className="bi bi-telephone-fill text-gold" /> +91 12345 67890
            </a>
            <a href="mailto:hello@mrchefhospitality.com">
              <i className="bi bi-envelope-fill text-gold" /> hello@mrchefhospitality.com
            </a>
            <span>
              <i className="bi bi-geo-alt-fill text-gold" /> Mumbai • Lucknow • Patna • Gangtok
            </span>
          </div>
          <div className="mch-footer__social">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
          </div>
        </div>

        <div className="mch-footer__col">
          <h4>Navigation</h4>
          <Link to="/about">About Mr Chef</Link>
          <Link to="/services">Turnkey Services</Link>
          <Link to="/projects">Delivered Projects</Link>
          <Link to="/industries">Industries Served</Link>
          <Link to="/career">Careers</Link>
          <Link to="/contact">Book Consultation</Link>
        </div>

        <div className="mch-footer__col">
          <h4>Expertise</h4>
          <Link to="/services">Hotel &amp; Resort Consulting</Link>
          <Link to="/services">Commercial Kitchen MEP</Link>
          <Link to="/services">Cloud Kitchen Network</Link>
          <Link to="/services">Menu &amp; Recipe Engineering</Link>
          <Link to="/services">Executive Chef Sourcing</Link>
          <Link to="/services">90-Day P&amp;L Audits</Link>
        </div>

        <div className="mch-footer__col mch-footer__newsletter">
          <h4>Hospitality Insights</h4>
          <p>Get quarterly feasibility benchmarks, kitchen engineering checklists, and F&amp;B trends.</p>
          <form className="mch-footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your executive email" required />
            <button type="submit" aria-label="Subscribe">
              <i className="bi bi-arrow-up-right" />
            </button>
          </form>
        </div>
      </div>

      <div className="container-lux mch-footer__bottom">
        <span>© {new Date().getFullYear()} Mr Chef Hospitality. All rights reserved. Registered Consultancy.</span>
        <div className="mch-footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
