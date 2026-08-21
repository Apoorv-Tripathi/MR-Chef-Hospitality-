import Reveal from "../shared/Reveal";
import "./industries.css";

const INDUSTRIES = [
  {
    num: "01",
    name: "Luxury Hotels & Boutique Stays",
    desc: "Boutique 48-120 key properties & heritage hotels.",
    icon: "bi-building",
    tag: "Room Dining + Banquet",
  },
  {
    num: "02",
    name: "Destination Resorts & Spas",
    desc: "Mountain, coastal & nature retreat operations.",
    icon: "bi-tree-fill",
    tag: "All-Day Dining + Cabana Bar",
  },
  {
    num: "03",
    name: "Fine Dining & High-Energy Resto-Bars",
    desc: "Chef-led culinary concept & mixology bar setups.",
    icon: "bi-cup-straw",
    tag: "A La Carte + Cocktails",
  },
  {
    num: "04",
    name: "Commercial Cloud Kitchen Networks",
    desc: "High-throughput multi-brand delivery hubs.",
    icon: "bi-cloud-fill",
    tag: "1000+ Orders/Day Throughput",
  },
  {
    num: "05",
    name: "Artisanal Cafes & High-Street Bistros",
    desc: "Bakery, espresso bar & grab-and-go models.",
    icon: "bi-cup-hot-fill",
    tag: "High Table Velocity",
  },
  {
    num: "06",
    name: "Institutional & Corporate Banqueting",
    desc: "High-capacity convention centers & campus dining.",
    icon: "bi-people-fill",
    tag: "500-2000 Pax Capacity",
  },
];

export default function Industries() {
  return (
    <section className="mch-industries section section-royal" id="industries">
      <div className="container-lux">
        <div className="mch-industries__head text-center">
          <Reveal>
            <div className="mch-industries__crest">
              <span className="mch-industries__crest-text">
                <i className="bi bi-layers-half" /> HOSPITALITY SECTORS
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-industries__heading text-balance">
              Specialized Turnkey Solutions Across Prime Hospitality Formats
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="royal-flourish">
              <i className="bi bi-diamond-fill" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mch-industries__sub text-muted-lux text-balance">
              Each hospitality format demands distinct kitchen MEP calculations, seating turn dynamics, and operational cost structures.
            </p>
          </Reveal>
        </div>

        <div className="mch-industries__grid">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={i * 0.05}
              y={20}
              className="mch-industries__card"
            >
              <div className="mch-industries__card-top">
                <div className="pod-concentric">
                  <i className={`bi ${ind.icon}`} />
                </div>
                <span className="mch-industries__num">{ind.num}</span>
              </div>

              <div className="mch-industries__card-body">
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>

              <div className="mch-industries__card-foot">
                <span className="badge-gold">
                  <i className="bi bi-check-circle-fill" /> {ind.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
