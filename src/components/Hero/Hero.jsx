import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import "./hero.css";

const CREDENTIALS = [
  { val: "10+", label: "Years Operational Heritage", icon: "bi-award-fill" },
  { val: "50+", label: "Flagship Venues Commissioned", icon: "bi-building-check" },
  { val: "₹150Cr+", label: "Asset Value Engineered", icon: "bi-graph-up-arrow" },
  { val: "90-Day", label: "Post-Launch P&L Stabilization", icon: "bi-shield-check" },
];

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    containerRef.current.style.setProperty("--mouse-x", `${x.toFixed(1)}%`);
    containerRef.current.style.setProperty("--mouse-y", `${y.toFixed(1)}%`);
  };

  return (
    <section
      ref={containerRef}
      className="mch-hero"
      id="hero"
      onMouseMove={handleMouseMove}
    >
      {/* Cinematic Background Layer with Parallax */}
      <motion.div className="mch-hero__bg" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2400&auto=format&fit=crop"
          alt="Luxury hospitality architectural ambiance"
          className="mch-hero__bg-img"
        />
        <div className="mch-hero__overlay" />
      </motion.div>

      {/* Interactive Cursor Spotlight Glow */}
      <div className="mch-hero__spotlight" />

      {/* Main Centered Editorial Content */}
      <motion.div className="container-lux mch-hero__inner" style={{ opacity }}>
        {/* Single Refined Eyebrow Badge */}
        <motion.div
          className="mch-hero__badge"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mch-hero__badge-dot" />
          <span>Turnkey Hospitality Architecture &amp; Advisory &bull; Pan-India</span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          className="mch-hero__title text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          Engineering High-Yield Hotels &amp; Commercial Kitchens
        </motion.h1>

        {/* Authoritative Subheadline */}
        <motion.p
          className="mch-hero__sub text-balance"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          From concept feasibility and CAD kitchen MEP engineering to executive chef hiring
          and profitable opening night &mdash; Mr Chef Hospitality Services delivers turnkey
          excellence with single-source accountability.
        </motion.p>

        {/* Dual Balanced CTAs */}
        <motion.div
          className="mch-hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/contact" className="btn-lux primary">
            <span>Book Consultation</span>
            <i className="bi bi-arrow-up-right icon" />
          </Link>
          <Link to="/services" className="btn-lux outline-light">
            <span>Explore Capabilities</span>
          </Link>
        </motion.div>

        {/* Grounded Architectural Trust Rail with Interactive Metric Cards */}
        <motion.div
          className="mch-hero__trust-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mch-hero__trust-inner">
            {CREDENTIALS.map((c, i) => (
              <div key={i} className="mch-hero__trust-col">
                <div className="mch-hero__trust-item">
                  <div className="mch-hero__trust-item-header">
                    <i className={`bi ${c.icon} mch-hero__trust-icon`} />
                    <span className="mch-hero__trust-val">{c.val}</span>
                  </div>
                  <span className="mch-hero__trust-label">{c.label}</span>
                </div>
                {i < CREDENTIALS.length - 1 && <span className="mch-hero__trust-divider" />}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Symmetrical Undulating Wave with Metallic Gold Border Styling */}
      <div className="mch-hero__wave-container">
        <svg
          className="mch-hero__wave-svg"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroWaveGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C2A782" stopOpacity="0.25" />
              <stop offset="20%" stopColor="#DFCBB5" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FBF4E6" stopOpacity="1" />
              <stop offset="80%" stopColor="#DFCBB5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C2A782" stopOpacity="0.25" />
            </linearGradient>
            <filter id="waveGlow" x="-5%" y="-20%" width="110%" height="150%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M0,40 C360,135 1080,135 1440,40 L1440,140 L0,140 Z"
            fill="var(--color-primary)"
          />
          <path
            d="M0,40 C360,135 1080,135 1440,40"
            stroke="url(#heroWaveGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#waveGlow)"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
