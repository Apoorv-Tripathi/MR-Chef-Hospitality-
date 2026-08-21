import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import "./contactContent.css";

const VENUE_TYPES = [
  { id: "Hotel", icon: "bi-building" },
  { id: "Restaurant", icon: "bi-cup-hot-fill" },
  { id: "Cloud Kitchen", icon: "bi-cloud-fill" },
  { id: "Resort", icon: "bi-tree" },
  { id: "Commercial Kitchen", icon: "bi-shop" },
  { id: "Something Else", icon: "bi-three-dots" },
];

const NEEDS = [
  "Concept & Planning",
  "Kitchen Design",
  "Interior & Branding",
  "Staff Recruitment",
  "Operations & SOPs",
  "Menu Engineering",
];

const WHATSAPP_NUMBER = "911234567890";

export default function ContactContent() {
  const [step, setStep] = useState(1);
  const [venue, setVenue] = useState(null);
  const [needs, setNeeds] = useState([]);
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const toggleNeed = (n) => {
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  };

  const summary = useMemo(() => {
    if (!venue) return "";
    const needsText = needs.length
      ? needs.join(", ")
      : "general consultancy";
    return `A ${venue} project needing help with ${needsText}.`;
  }, [venue, needs]);

  const onSubmit = (data) => {
    setSent({ ...data });
  };

  const whatsappHref = sent
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi Mr Chef Hospitality Services — ${summary} My name is ${sent.name}, reach me at ${sent.phone || sent.email}.`
      )}`
    : "#";

  return (
    <section className="mch-contact section">
      <div className="container-lux mch-contact__grid">
        <Reveal className="mch-contact__form-col">
          <h2>Tell us about your project</h2>

          {sent ? (
            <div className="mch-contact__success">
              <i className="bi bi-check-circle" />
              <div>
                <p>Thanks, {sent.name.split(" ")[0]} — we'll be in touch within one business day.</p>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mch-contact__wa-link">
                  <i className="bi bi-whatsapp" /> Continue the conversation on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="mch-brief__steps">
                {[1, 2, 3].map((n) => (
                  <div key={n} className={`mch-brief__step-dot ${step >= n ? "is-active" : ""}`}>
                    <span>{String(n).padStart(2, "0")}</span>
                    {n < 3 && <em />}
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="mch-brief__prompt">What are you building?</p>
                    <div className="mch-brief__venue-grid">
                      {VENUE_TYPES.map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          className={`mch-brief__venue-card ${venue === v.id ? "is-active" : ""}`}
                          onClick={() => setVenue(v.id)}
                        >
                          <i className={`bi ${v.icon}`} />
                          <span>{v.id}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="btn-lux primary mch-brief__next"
                      disabled={!venue}
                      onClick={() => setStep(2)}
                    >
                      Continue <i className="bi bi-arrow-right icon" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="mch-brief__prompt">What do you need help with? <span>(pick any)</span></p>
                    <div className="mch-brief__chips">
                      {NEEDS.map((n) => (
                        <button
                          key={n}
                          type="button"
                          className={`mch-brief__chip ${needs.includes(n) ? "is-active" : ""}`}
                          onClick={() => toggleNeed(n)}
                        >
                          {needs.includes(n) && <i className="bi bi-check2" />}
                          {n}
                        </button>
                      ))}
                    </div>
                    <div className="mch-brief__nav">
                      <button type="button" className="mch-brief__back" onClick={() => setStep(1)}>
                        <i className="bi bi-arrow-left" /> Back
                      </button>
                      <button type="button" className="btn-lux primary mch-brief__next" onClick={() => setStep(3)}>
                        Continue <i className="bi bi-arrow-right icon" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.form
                    key="step3"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    <p className="mch-brief__summary">{summary}</p>
                    <div className="mch-contact__row">
                      <div>
                        <input type="text" placeholder="Full name" {...register("name", { required: true })} />
                        {errors.name && <span className="mch-contact__error">Required</span>}
                      </div>
                      <div>
                        <input type="email" placeholder="Email address" {...register("email", { required: true })} />
                        {errors.email && <span className="mch-contact__error">Required</span>}
                      </div>
                    </div>
                    <input type="tel" placeholder="Phone number" {...register("phone")} />
                    <div className="mch-brief__nav">
                      <button type="button" className="mch-brief__back" onClick={() => setStep(2)}>
                        <i className="bi bi-arrow-left" /> Back
                      </button>
                      <button type="submit" className="btn-lux primary mch-brief__next">
                        Send Brief <i className="bi bi-arrow-up-right icon" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </>
          )}
        </Reveal>

        <Reveal delay={0.1} className="mch-contact__info-col">
          <div className="mch-contact__info">
            <h3>Head Office</h3>
            <p>14 Marine Terrace, Bandra West, Mumbai 400050</p>
          </div>
          <div className="mch-contact__info">
            <h3>Get in Touch</h3>
            <a href="tel:+911234567890"><i className="bi bi-telephone" /> +91 12345 67890</a>
            <a href="mailto:hello@mrchefhospitality.com"><i className="bi bi-envelope" /> hello@mrchefhospitality.com</a>
          </div>
          <div className="mch-contact__info">
            <h3>Office Hours</h3>
            <p>Monday – Saturday, 10:00 AM – 7:00 PM IST</p>
          </div>
          <div className="mch-contact__social">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
          </div>
          <div className="mch-contact__map">
            <i className="bi bi-geo-alt" />
            <span>Map view</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
