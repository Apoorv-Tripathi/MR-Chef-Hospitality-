import { motion } from "framer-motion";

/**
 * Reveal — fades + rises content into view once, on scroll.
 * Wraps children; keep usage shallow (don't nest Reveals deeply).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  className = "",
  as = "div",
  once = true,
  amount = 0.2,
  ...rest
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
