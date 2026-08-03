import PageHero from "../components/shared/PageHero";
import ContactContent from "../components/ContactContent/ContactContent";

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        heading={
          <>
            Let's talk about what you're <em>building</em>.
          </>
        }
        sub="Tell us where you are in the process — we'll tell you what it takes to open it right."
      />
      <ContactContent />
    </>
  );
}
