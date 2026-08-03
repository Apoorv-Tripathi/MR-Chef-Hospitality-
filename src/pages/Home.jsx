import Hero from "../components/Hero/Hero";
import TrustedClients from "../components/TrustedClients/TrustedClients";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import Journey from "../components/Journey/Journey";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Industries from "../components/Industries/Industries";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Process from "../components/Process/Process";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedClients />
      <AboutPreview />
      <Journey />
      <Services />
      <Projects />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <CTA />
    </>
  );
}
