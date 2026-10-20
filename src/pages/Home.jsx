import Hero from "../components/Hero/Hero";
import TrustedClients from "../components/TrustedClients/TrustedClients";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import Services from "../components/Services/Services";
import Journey from "../components/Journey/Journey";
import Projects from "../components/Projects/Projects";
import Process from "../components/Process/Process";
import Industries from "../components/Industries/Industries";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedClients />
      <AboutPreview />
      <Services />
      <Journey />
      <Projects />
      <Process />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
