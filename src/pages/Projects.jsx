import PageHero from "../components/shared/PageHero";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import CTA from "../components/CTA/CTA";

export default function Projects() {
  return (
    <>
      <PageHero
        crumb="Projects"
        heading={
          <>
            Real ventures. <em>One</em> standard of execution.
          </>
        }
        sub="Hotels and restaurants we've helped set up and staff — filter by format or click through for the scope of work."
      />
      <ProjectsGrid />
      <CTA />
    </>
  );
}
