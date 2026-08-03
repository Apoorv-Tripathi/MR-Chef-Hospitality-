import { motion } from "framer-motion";

/**
 * An abstract hotel/restaurant floor-plan blueprint.
 * Lines draw themselves in sequence — the visual thesis of the brand:
 * "We Build Hospitality Experiences" from the ground plan up.
 */
const lineTransition = (delay, duration = 1.6) => ({
  pathLength: { delay, duration, ease: [0.65, 0, 0.35, 1] },
  opacity: { delay, duration: 0.4 },
});

export default function BlueprintSVG({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer building envelope */}
      <motion.rect
        x="60" y="60" width="780" height="520"
        stroke="var(--bp-line)" strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={lineTransition(0.2, 2)}
      />

      {/* Lobby / entrance division */}
      <motion.path
        d="M60 220 H 340"
        stroke="var(--bp-line)" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={lineTransition(0.9)}
      />
      <motion.path
        d="M340 60 V 220"
        stroke="var(--bp-line)" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={lineTransition(1.0)}
      />

      {/* Kitchen block */}
      <motion.rect
        x="500" y="60" width="340" height="220"
        stroke="var(--bp-accent)" strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={lineTransition(1.1, 1.4)}
      />
      {/* Kitchen equipment hatching */}
      {[540, 580, 620, 660, 700, 740, 780].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 90 V 250`}
          stroke="var(--bp-accent)" strokeWidth="0.6" opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.6 + i * 0.05, duration: 0.6 }}
        />
      ))}

      {/* Dining hall — round tables */}
      {[
        [430, 360], [560, 360], [690, 360],
        [430, 470], [560, 470], [690, 470],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx} cy={cy} r="26"
          stroke="var(--bp-line)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0, scale: 0.6 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ delay: 1.9 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* Corridor / partition to dining */}
      <motion.path
        d="M60 300 H 840 M340 220 V 300"
        stroke="var(--bp-line)" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={lineTransition(1.3)}
      />

      {/* Bar counter */}
      <motion.path
        d="M100 130 H 260"
        stroke="var(--bp-accent)" strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={lineTransition(2.3, 0.9)}
      />

      {/* Dimension marks */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        <path d="M60 600 H 840" stroke="var(--bp-line)" strokeWidth="0.6" />
        <path d="M60 594 V 606 M840 594 V 606" stroke="var(--bp-line)" strokeWidth="0.6" />
      </motion.g>

      {/* Compass / north marker */}
      <motion.g
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 0.7, rotate: 0 }}
        transition={{ delay: 2.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "800px 500px" }}
      >
        <circle cx="800" cy="500" r="22" stroke="var(--bp-gold)" strokeWidth="0.8" />
        <path d="M800 482 V 518 M782 500 H 818" stroke="var(--bp-gold)" strokeWidth="0.6" />
        <path d="M800 482 L 796 492 L 804 492 Z" fill="var(--bp-gold)" />
      </motion.g>
    </svg>
  );
}
