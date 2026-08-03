import PageHero from "../components/shared/PageHero";
import LegalContent from "../components/LegalContent/LegalContent";

const SECTIONS = [
  {
    heading: "Use of This Site",
    body: "This website is provided for informational purposes about Mr Chef Hospitality's services. You agree not to misuse the site or its content for unlawful purposes.",
  },
  {
    heading: "Intellectual Property",
    body: "All content, branding, and imagery on this site are the property of Mr Chef Hospitality unless otherwise credited, and may not be reproduced without permission.",
  },
  {
    heading: "Engagement Terms",
    body: "Any consultancy engagement is governed by a separate signed agreement between Mr Chef Hospitality and the client, which takes precedence over the general terms on this site.",
  },
  {
    heading: "Limitation of Liability",
    body: "While we strive for accuracy, Mr Chef Hospitality makes no warranties about the completeness of information on this site and is not liable for decisions made based solely on it.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these terms periodically. Continued use of the site after changes constitutes acceptance of the revised terms.",
  },
];

export default function TermsConditions() {
  return (
    <>
      <PageHero
        crumb="Terms & Conditions"
        heading={<>Terms &amp; Conditions</>}
        sub="The terms governing your use of this website."
      />
      <LegalContent updated="January 2026" sections={SECTIONS} />
    </>
  );
}
