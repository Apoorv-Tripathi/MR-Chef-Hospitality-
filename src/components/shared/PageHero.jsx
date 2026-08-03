import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./pageHero.css";

/**
 * PageHero — compact interior-page banner.
 * `heading` accepts JSX so callers can wrap a word in <em> for gold emphasis.
 */
export default function PageHero({ crumb, heading, sub }) {
  return (
    <section className="mch-page-hero">
      <div className="container-lux mch-page-hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="mch-page-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{crumb}</span>
          </nav>
        </motion.div>

        <motion.h1
          className="mch-page-hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {heading}
        </motion.h1>

        <motion.p
          className="mch-page-hero__sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {sub}
        </motion.p>
      </div>
    </section>
  );
}
