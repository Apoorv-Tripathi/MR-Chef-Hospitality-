import PageHero from "../components/shared/PageHero";
import LegalContent from "../components/LegalContent/LegalContent";

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: "When you submit a contact form, apply for a role, or subscribe to our newsletter, we collect the details you provide — such as your name, email, phone number, and project information.",
  },
  {
    heading: "How We Use It",
    body: "We use your information to respond to enquiries, evaluate job applications, and send occasional updates you've opted into. We do not sell your data to third parties.",
  },
  {
    heading: "Data Retention",
    body: "We retain enquiry and application data only as long as necessary to respond to you or process your application, after which it is securely deleted.",
  },
  {
    heading: "Your Rights",
    body: "You can request access to, correction of, or deletion of your personal data at any time by emailing hello@mrchefhospitality.com.",
  },
  {
    heading: "Cookies",
    body: "This site uses minimal cookies for basic functionality and analytics. No third-party advertising cookies are used.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        heading={<>Privacy Policy</>}
        sub="How we collect, use, and protect your information."
      />
      <LegalContent updated="January 2026" sections={SECTIONS} />
    </>
  );
}
