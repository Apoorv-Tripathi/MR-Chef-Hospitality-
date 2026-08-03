import Reveal from "../shared/Reveal";
import "./testimonialsGrid.css";

const REVIEWS = [
  { quote: "They planned our kitchen for our worst night, not our average one. Two years in, it hasn't buckled.", name: "Aarav Mehta", role: "Owner, Ember House" },
  { quote: "Feasibility study to staffed opening in eleven months. Every deadline they gave us, they hit.", name: "Priya Nataraj", role: "Director, Copperleaf Resorts" },
  { quote: "The first consultancy that stayed past the ribbon-cutting.", name: "Farhan Qureshi", role: "CEO, Cloud Nine Kitchens" },
  { quote: "The recruitment alone paid for the engagement. Our GM is still with us four years later.", name: "Leela Ramanathan", role: "Founder, Marigold Collection" },
  { quote: "Honest about what wouldn't work before we spent money finding out ourselves.", name: "Sanjay Bhatt", role: "Founder, North Bay Kitchens" },
  { quote: "Our menu redesign alone lifted average ticket size by 18% in the first quarter.", name: "Ritu Malhotra", role: "Owner, Saffron & Co." },
];

export default function TestimonialsGrid() {
  return (
    <section className="mch-tg section">
      <div className="container-lux mch-tg__grid">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.05} y={20} className="mch-tg__card">
            <i className="bi bi-quote" />
            <p>"{r.quote}"</p>
            <div>
              <strong>{r.name}</strong>
              <span>{r.role}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
