import PageHero from "../components/shared/PageHero";
import TestimonialsGrid from "../components/TestimonialsGrid/TestimonialsGrid";

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumb="Testimonials"
        heading={
          <>
            What partners say after <em>opening</em> night.
          </>
        }
        sub="Six of the conversations we're proudest of."
      />
      <TestimonialsGrid />
    </>
  );
}
