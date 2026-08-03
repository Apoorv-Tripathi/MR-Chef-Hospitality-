import { motion } from "framer-motion";
import "./floatingWhatsApp.css";

const PHONE = "911234567890";
const MESSAGE = "Hi Mr Chef Hospitality, I'd like to talk about a project.";

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mch-wa"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="mch-wa__ring" />
      <i className="bi bi-whatsapp" />
      <span className="mch-wa__tooltip">Chat with us</span>
    </motion.a>
  );
}
