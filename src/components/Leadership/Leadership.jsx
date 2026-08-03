import Reveal from "../shared/Reveal";
import abhishek from "../../assets/team/abhishek-mishra.jpg";
import sanjeev from "../../assets/team/sanjeev-mishra.jpg";
import sunil from "../../assets/team/sunil-sharma.jpg";
import meenu from "../../assets/team/meenu-verma.jpg";
import faresh from "../../assets/team/faresh-soni.jpg";
import rakesh from "../../assets/team/rakesh-pandey.jpg";
import swati from "../../assets/team/swati-gupta.jpg";
import imran from "../../assets/team/imran-ahmed.jpg";
import "./leadership.css";

const TEAM = [
  { name: "Abhishek Mishra", role: "Director & Interior Designer", img: abhishek },
  { name: "Sanjeev Mishra", role: "Hotel & Restaurant Consultant", img: sanjeev },
  { name: "Rakesh Pandey", role: "Executive Chef & Food Trainer", img: rakesh },
  { name: "Faresh Soni", role: "F&B Management & Trainer", img: faresh },
  { name: "Sunil Sharma", role: "Crockery & Cutlery Consultant", img: sunil },
  { name: "Imran Ahmed", role: "Food Trainer", img: imran },
  { name: "Meenu Verma", role: "Sr. Recruiter", img: meenu },
  { name: "Swati Gupta", role: "Sr. Recruiter", img: swati },
];

export default function Leadership() {
  return (
    <section className="mch-lead section-sm" id="leadership">
      <div className="container-lux">
        <div className="mch-lead__head">
          <Reveal><p className="eyebrow">Leadership</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mch-lead__heading text-balance">
              The people who stay on-site until it works.
            </h2>
          </Reveal>
        </div>

        <div className="mch-lead__grid">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} y={20} className="mch-lead__card">
              <div className="mch-lead__photo">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <h3>{p.name}</h3>
              <span>{p.role}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
