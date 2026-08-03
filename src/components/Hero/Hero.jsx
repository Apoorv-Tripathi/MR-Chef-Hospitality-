import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import BlueprintSVG from "./BlueprintSVG";
import "./hero.css";

const headline = "We Build Hospitality Experiences.";
const words = headline.split(" ");

export default function Hero() {
  const sectionRef = useRef(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);
  const shiftX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const shiftY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      className="mch-hero"
      onMouseMove={handleMouseMove}
    >
      <div className="mch-hero__blueprint-wrap">
        <motion.div
          className="mch-hero__blueprint"
          style={{ rotateX, rotateY, x: shiftX, y: shiftY }}
        >
          <BlueprintSVG className="mch-hero__blueprint-svg" />
        </motion.div>
      </div>

      <div className="container-lux mch-hero__content">
        <motion.p
          className="eyebrow light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Hospitality Consultancy &amp; Turnkey Solutions
        </motion.p>

        <h1 className="mch-hero__headline">
          {words.map((word, i) => (
            <span key={i} className="mch-hero__word-mask">
              <motion.span
                className="mch-hero__word"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.5 + i * 0.09,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mch-hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          From concept to grand opening, Mr Chef Hospitality plans, designs,
          and operationalises hotels, restaurants, resorts, cloud kitchens,
          and commercial kitchens — so every venue we touch opens ready to
          perform.
        </motion.p>

        <motion.div
          className="mch-hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/contact" className="btn-lux primary">
            Start Your Project
            <i className="bi bi-arrow-up-right icon" />
          </Link>
          <Link to="/services" className="btn-lux outline-light">
            Explore Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="mch-hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="mch-hero__scroll-line">
          <motion.span
            animate={{ y: ["0%", "160%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
