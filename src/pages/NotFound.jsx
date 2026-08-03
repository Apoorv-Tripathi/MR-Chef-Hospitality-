import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="mch-404 section">
      <div className="container-lux mch-404__inner">
        <span className="mch-404__code">404</span>
        <h1 className="mch-404__heading">This room isn't on the floor plan.</h1>
        <p className="mch-404__text">
          The page you're looking for may have been moved, renamed, or never
          built. Let's get you back to solid ground.
        </p>
        <Link to="/" className="btn-lux primary">
          Back to Home <i className="bi bi-arrow-up-right icon" />
        </Link>
      </div>
    </section>
  );
}
