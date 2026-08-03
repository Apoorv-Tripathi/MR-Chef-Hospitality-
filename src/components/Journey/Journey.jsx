import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../shared/Reveal";
import "./journey.css";

const STEPS = [
  { icon: "bi-lightbulb", label: "Concept", desc: "Positioning, feasibility & brand direction." },
  { icon: "bi-clipboard-data", label: "Planning", desc: "Layouts, cost models, timelines." },
  { icon: "bi-pencil-square", label: "Design", desc: "Interiors, kitchen & spatial design." },
  { icon: "bi-building", label: "Construction Support", desc: "Vendor coordination & site supervision." },
  { icon: "bi-fire", label: "Kitchen Setup", desc: "Equipment planning & installation." },
  { icon: "bi-people", label: "Recruitment", desc: "Chefs, managers & service staff." },
  { icon: "bi-gear", label: "Operations", desc: "SOPs, training & systems setup." },
  { icon: "bi-flag", label: "Launch", desc: "Soft opening through grand launch." },
];

export default function Journey() {
  const trackRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const lineWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  // Click-drag to scroll on desktop — native overflow-x still handles touch/trackpad.
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown = (e) => {
    if (e.pointerType === "touch") return; // let touch scrolling behave natively
    const el = trackRef.current;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    if (drag.current.moved) setIsDragging(true);
    trackRef.current.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
    // Small timeout so the trailing click event (if any) still sees isDragging
    setTimeout(() => setIsDragging(false), 0);
  };

  return (
    <section className="mch-journey section" id="journey">
      <div className="container-lux mch-journey__head">
        <Reveal>
          <p className="eyebrow">How We Work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mch-journey__heading text-balance">
            One journey, from first sketch to opening night.
          </h2>
        </Reveal>
      </div>

      <div className="mch-journey__track-outer container-lux">
        <div className="mch-journey__rail">
          <div className="mch-journey__rail-bg" />
          <motion.div className="mch-journey__rail-fill" style={{ width: lineWidth }} />
        </div>

        <div
          className={`mch-journey__track ${isDragging ? "is-dragging" : ""}`}
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {STEPS.map((step, i) => (
            <Reveal
              as="div"
              key={step.label}
              delay={i * 0.04}
              y={20}
              className="mch-journey__step"
            >
              <div className="mch-journey__step-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="mch-journey__step-icon">
                <i className={`bi ${step.icon}`} />
              </div>
              <h3 className="mch-journey__step-label">{step.label}</h3>
              <p className="mch-journey__step-desc">{step.desc}</p>
              {i < STEPS.length - 1 && <span className="mch-journey__connector" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
