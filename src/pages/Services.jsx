import PageHero from "../components/shared/PageHero";
import ServiceCategories from "../components/ServiceCategories/ServiceCategories";
import CTA from "../components/CTA/CTA";

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        heading={
          <>
            Fifteen disciplines, delivered as <em>one</em> accountable
            engagement.
          </>
        }
        sub="From feasibility study to staffed opening, we cover every discipline a hospitality launch needs — so you're never coordinating between five different vendors."
      />
      <ServiceCategories />
      <CTA />
    </>
  );
}
