import PageHero from "../components/shared/PageHero";
import CareerContent from "../components/CareerContent/CareerContent";
import CTA from "../components/CTA/CTA";

export default function Career() {
  return (
    <>
      <PageHero
        crumb="Career"
        heading={
          <>
            Join a team that <em>opens</em> what it designs.
          </>
        }
        sub="We're a small, hands-on team — every hire works close to real projects from day one."
      />
      <CareerContent />
      <CTA />
    </>
  );
}
