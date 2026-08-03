import Reveal from "../shared/Reveal";
import "./story.css";

export default function Story() {
  return (
    <section className="mch-story section">
      <div className="container-lux mch-story__grid">
        <div className="mch-story__col-label">
          <Reveal><p className="eyebrow">Our Story</p></Reveal>
        </div>

        <div className="mch-story__col-body">
          <Reveal>
            <h2 className="mch-story__heading text-balance">
              Founded in 2015, built on hands-on kitchen experience.
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <p>
              Mr Chef Hospitality has grown into a trusted name in the
              hospitality and culinary industry. Over a decade of experience
              has gone into providing professional, high-quality cooking and
              hospitality solutions to hotels, restaurants, and catering
              brands across India.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              Our journey began with a simple vision — to bring innovation,
              discipline, and excellence to every kitchen we serve. Over the
              years, we've worked with national and international brands,
              supporting them with expertise in food production, kitchen
              operations, and service management.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              From conceptual planning to flawless execution, our team makes
              sure every project meets the same standard of quality,
              hygiene, and guest satisfaction — whether it's a single
              restaurant or a full hotel launch.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
