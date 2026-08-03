import PageHero from "../components/shared/PageHero";
import Story from "../components/Story/Story";
import Philosophy from "../components/Philosophy/Philosophy";
import CompanyTimeline from "../components/CompanyTimeline/CompanyTimeline";
import Leadership from "../components/Leadership/Leadership";
import Achievements from "../components/Achievements/Achievements";
import CTA from "../components/CTA/CTA";

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        heading={
          <>
            A decade of building rooms that <em>work</em> — not just
            rooms that photograph well.
          </>
        }
        sub="Founded in 2015, we're a hands-on team of consultants, chefs, and recruiters behind hotels and restaurants across India."
      />
      <Story />
      <Philosophy />
      <CompanyTimeline />
      <Leadership />
      <Achievements />
      <CTA />
    </>
  );
}
