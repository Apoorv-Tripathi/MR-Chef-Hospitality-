import PageHero from "../components/shared/PageHero";
import IndustryShowcase from "../components/IndustryShowcase/IndustryShowcase";
import CTA from "../components/CTA/CTA";

export default function Industries() {
  return (
    <>
      <PageHero
        crumb="Industries"
        heading={
          <>
            Ten formats. <em>One</em> standard we don't flex on.
          </>
        }
        sub="Every hospitality format has its own margins, staffing patterns, and kitchen demands. We've built the playbook for each one."
      />
      <IndustryShowcase />
      <CTA />
    </>
  );
}
