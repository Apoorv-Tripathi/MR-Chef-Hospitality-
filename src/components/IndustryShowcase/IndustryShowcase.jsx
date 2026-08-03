import Reveal from "../shared/Reveal";
import "./industryShowcase.css";

const INDUSTRIES = [
  {
    num: "01",
    name: "Hotels",
    desc: "Full-service and boutique properties — from feasibility and interiors through staffing and pre-opening operations.",
    tags: ["Hotel Consultancy", "Interior Consultation", "Staff Recruitment"],
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "02",
    name: "Luxury Resorts",
    desc: "Destination and wellness resorts where F&B, spa dining, and event kitchens all have to work in concert.",
    tags: ["Turnkey Solutions", "Kitchen Planning", "SOP Development"],
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "03",
    name: "Restaurants",
    desc: "Casual to premium concepts, single-unit or multi-outlet, built around a menu and format that actually scales.",
    tags: ["Restaurant Consultancy", "Menu Engineering", "Branding"],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "04",
    name: "Fine Dining",
    desc: "Chef-led, experience-first venues where kitchen design has to match the ambition of the menu.",
    tags: ["Chef Hiring", "Kitchen Design", "Guest Experience"],
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "05",
    name: "Quick Service Restaurants",
    desc: "High-velocity formats where throughput, consistency, and unit economics decide whether the model works.",
    tags: ["Food Production", "Equipment Planning", "Unit Economics"],
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "06",
    name: "Cloud Kitchens",
    desc: "Delivery-only production models designed around aggregator platforms, multi-brand output, and speed.",
    tags: ["Cloud Kitchen Setup", "Delivery SOPs", "Multi-brand Layouts"],
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "07",
    name: "Corporate Kitchens",
    desc: "Employee dining and cafeteria operations that balance cost control with genuine food quality.",
    tags: ["Commercial Kitchen Design", "Food Production", "Operations"],
    img: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "08",
    name: "Institutional Kitchens",
    desc: "Large-scale catering operations serving hundreds to thousands of covers a day, reliably.",
    tags: ["Kitchen Planning", "SOP Development", "Staff Training"],
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "09",
    name: "Healthcare Hospitality",
    desc: "Patient and staff dining services designed around dietary compliance as much as guest experience.",
    tags: ["Commercial Kitchen Design", "Compliance", "Menu Engineering"],
    img: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "10",
    name: "Educational Institutions",
    desc: "Campus dining and hostel kitchens built to serve consistent, nutritious meals at scale, every day.",
    tags: ["Food Production", "Equipment Planning", "Operations"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function IndustryShowcase() {
  return (
    <section className="mch-ind-show section">
      <div className="container-lux">
        {INDUSTRIES.map((ind, i) => (
          <div
            key={ind.name}
            className={`mch-ind-show__row ${i % 2 === 1 ? "is-reversed" : ""}`}
          >
            <Reveal className="mch-ind-show__image" y={30}>
              <img src={ind.img} alt={ind.name} loading="lazy" />
            </Reveal>
            <Reveal className="mch-ind-show__content" delay={0.08} y={20}>
              <span className="mch-ind-show__num">{ind.num}</span>
              <h2>{ind.name}</h2>
              <p>{ind.desc}</p>
              <div className="mch-ind-show__tags">
                {ind.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
