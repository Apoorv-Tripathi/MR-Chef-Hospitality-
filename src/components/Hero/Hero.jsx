import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import "./hero.css";

const PREVIEW_DISCS = [
  {
    num: "01",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
    title: "Kitchen CAD & MEP",
    sub: "HACCP Architecture",
  },
  {
    num: "02",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    title: "Direct OEM BOQs",
    sub: "15-20% Sourcing Save",
  },
  {
    num: "03",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
    title: "Grand Opening & P&L",
    sub: "90-Day Stabilization",
  },
];

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={containerRef} className="mch-hero" id="hero">
      {/* Cinematic Background Layer */}
      <motion.div className="mch-hero__bg" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury hospitality architectural ambiance"
          className="mch-hero__bg-img"
        />
        <div className="mch-hero__overlay" />
      </motion.div>

      {/* Main Centered Content */}
      <motion.div className="container-lux mch-hero__inner" style={{ opacity }}>
        {/* Centered Royal Crest Emblem */}
        <motion.div
          className="mch-hero__crest-badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mch-hero__crest-icon">
            <i className="bi bi-crown" />
            <span>MC</span>
          </div>
          <span className="mch-hero__crest-brand">MR CHEF HOSPITALITY</span>
          <span className="mch-hero__crest-year">SINCE 2015</span>
        </motion.div>

        {/* Eyebrow Guarantee & Rating */}
        <motion.div
          className="mch-hero__guarantee"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mch-hero__guarantee-tag">BEST HOSPITALITY CONSULTANCY GUARANTEED</span>
          <div className="mch-hero__stars-row">
            <span className="mch-hero__stars">★★★★★</span>
            <span className="mch-hero__rating-text">50+ Venues Launched • 4.9 Rating</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="mch-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          We Build Luxury Hotels &amp; High-Yield Restaurants
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mch-hero__sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          Full-spectrum turnkey execution from feasibility and MEP kitchen architecture to executive chef hiring and profitable opening night.
        </motion.p>

        {/* Centered Glassmorphic Oval Pill Button */}
        <motion.div
          className="mch-hero__cta-wrap"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#estimator" className="mch-hero__oval-btn">
            <span>CALCULATE PROJECT SCOPE</span>
            <i className="bi bi-calendar2-check-fill" />
          </a>
        </motion.div>
      </motion.div>

      {/* Symmetrical Undulating Wave with 3 Center Circular Image Discs */}
      <div className="mch-hero__wave-container">
        {/* 3 Circular Image Discs nestled in wave trough */}
        <div className="mch-hero__discs-row">
          {PREVIEW_DISCS.map((d, i) => (
            <motion.div
              key={i}
              className="mch-hero__circular-disc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7 }}
            >
              <div className="mch-hero__disc-inner">
                <img src={d.img} alt={d.title} />
                <span className="mch-hero__disc-badge">{d.num}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Symmetrical Wave SVG with Metallic Gold Stroke */}
        <svg
          className="mch-hero__wave-svg"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroWaveGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#E5C467" stopOpacity="1" />
              <stop offset="50%" stopColor="#F9EDB8" stopOpacity="1" />
              <stop offset="75%" stopColor="#E5C467" stopOpacity="1" />
              <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C360,140 1080,140 1440,40 L1440,160 L0,160 Z"
            fill="#12100E"
          />
          <path
            d="M0,40 C360,140 1080,140 1440,40"
            stroke="url(#heroWaveGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
