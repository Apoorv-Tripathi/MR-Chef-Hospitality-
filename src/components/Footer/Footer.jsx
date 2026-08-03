import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="mch-footer">
      <div className="container-lux mch-footer__top">
        <div className="mch-footer__brand">
          <Link to="/" className="mch-footer__logo">
            <span className="mch-footer__logo-mark">MC</span>
            <span>
              Mr Chef <em>Hospitality</em>
            </span>
          </Link>
          <p>
            Full-spectrum hospitality consultancy — concept, design,
            kitchens, staffing, and operations for hotels, restaurants,
            resorts, and cloud kitchens.
          </p>
          <div className="mch-footer__social">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x" /></a>
          </div>
        </div>

        <div className="mch-footer__col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/career">Careers</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>

        <div className="mch-footer__col">
          <h4>Services</h4>
          <Link to="/services">Hotel Consultancy</Link>
          <Link to="/services">Restaurant Consultancy</Link>
          <Link to="/services">Cloud Kitchen Setup</Link>
          <Link to="/services">Staff Recruitment</Link>
        </div>

        <div className="mch-footer__col mch-footer__newsletter">
          <h4>Stay Informed</h4>
          <p>Insights on hospitality design & operations, occasionally.</p>
          <form className="mch-footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Subscribe">
              <i className="bi bi-arrow-up-right" />
            </button>
          </form>
        </div>
      </div>

      <div className="container-lux mch-footer__bottom">
        <span>© {new Date().getFullYear()} Mr Chef Hospitality. All rights reserved.</span>
        <div className="mch-footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
