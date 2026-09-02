import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";
import {
  BUSINESS_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_ENTITY_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: { absolute: `Privacy Policy | ${SITE_NAME}` },
  description: `How ${SITE_NAME} collects, uses, and protects personal information, including mobile and SMS data.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const ENTITY = LEGAL_ENTITY_NAME || SITE_NAME;

const SECTIONS: Section[] = [
  {
    heading: "Who we are",
    blocks: [
      `${ENTITY} is a video and copy studio based in Delaware, Ohio, operating the website at ${SITE_URL}. This policy explains what personal information we collect, why we collect it, and what we do with it.`,
      ...(BUSINESS_ADDRESS.length
        ? [`Our mailing address is ${BUSINESS_ADDRESS.join(", ")}.`]
        : []),
      `You can reach us at ${CONTACT_EMAIL} or ${CONTACT_PHONE} with any question about this policy or about information we hold on you.`,
    ],
  },
  {
    heading: "Information we collect",
    blocks: [
      "We collect only what you give us and what a website records automatically. We do not buy personal information from data brokers and we do not build profiles on people who have not contacted us.",
      { subhead: "Information you give us" },
      {
        list: [
          "Your name, email address, business name, and website, when you request a Trust Audit.",
          "Your name, email address, and anything else you choose to enter when you fill in a form or request a download.",
          "Your name, email address, phone number, and the details you provide when you book a call.",
          "Whatever you type into the chat widget, including a phone number if you give one.",
          "The contents of emails, calls, and text messages between us.",
        ],
      },
      { subhead: "Information collected automatically" },
      {
        list: [
          "Standard server logs, including IP address, browser type, and the pages requested.",
          "Cookies set by this site for functionality only, described in section 6.",
        ],
      },
    ],
  },
  {
    heading: "How we use it",
    blocks: [
      "We use personal information to answer you, to prepare and send anything you have asked for, to provide services you have engaged us for, to send messages you have agreed to receive, and to meet our legal and accounting obligations.",
      "We do not sell personal information. We do not rent it, and we do not trade it.",
    ],
  },
  {
    heading: "Mobile information and SMS",
    blocks: [
      "This section governs phone numbers and text messaging, and it applies in addition to everything else in this policy.",
      {
        note: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
      },
      "In plain terms: if you give us your mobile number, we use it to talk to you. We do not pass it to advertisers, we do not include it in any list that is sold or exchanged, and your consent to receive text messages is never shared with anyone.",
      "Text messages are sent only to people who have asked to receive them. You can stop them at any time by replying STOP, and you can reply HELP for assistance. Full messaging terms are in our Terms of Service.",
    ],
  },
  {
    heading: "Who we share information with",
    blocks: [
      "We share personal information only with the service providers that run parts of this business for us, and only so far as they need it to do that work. They are bound to protect it and may not use it for their own purposes.",
      {
        list: [
          "GoHighLevel (LeadConnector), which runs our contact forms, chat widget, booking calendar, email, and text messaging.",
          "Vercel, which hosts this website and processes server logs.",
          "Google, when a page you visit contains an embedded YouTube video.",
        ],
      },
      "We also disclose information where the law requires it, or to establish or defend a legal claim. If the business is ever sold or merged, personal information may transfer with it, and this policy continues to apply until you are told otherwise.",
    ],
  },
  {
    heading: "Cookies and tracking",
    blocks: [
      "This site sets cookies for functionality only. There is no advertising network on it, and we do not run cross-site tracking or retargeting pixels.",
      {
        list: [
          "A preview cookie, set only if you follow a private preview link, so the site remembers to show you unreleased pages.",
          "Sign-in cookies, set only for administrators editing site copy.",
        ],
      },
      "Two third parties can set their own cookies. Embedded YouTube videos set cookies when a video is played, and the chat widget sets what it needs to keep a conversation going. Blocking cookies in your browser will stop those features working but will not stop you reading the site.",
    ],
  },
  {
    heading: "How long we keep it",
    blocks: [
      "Enquiries and their correspondence are kept while the conversation is live and for a reasonable period afterwards, so we can pick up where we left off. Records tied to paid work are kept for as long as accounting and tax rules require. Anything else is deleted when it no longer serves the purpose it was collected for.",
    ],
  },
  {
    heading: "Your choices and rights",
    blocks: [
      "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Write to us and we will act on it.",
      {
        list: [
          "To stop text messages, reply STOP to any message from us.",
          "To stop marketing emails, use the unsubscribe link in any of them.",
          "To ask for a copy of your information or its deletion, email us.",
        ],
      },
      "Opting out of marketing does not stop messages we have to send about work already in progress.",
    ],
  },
  {
    heading: "Children",
    blocks: [
      "This site and these services are for businesses, and are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has given us information, tell us and we will delete it.",
    ],
  },
  {
    heading: "Security",
    blocks: [
      "The site is served over HTTPS, and information you submit is held in the systems named in section 5, each protected by their own access controls. No method of transmission or storage is completely secure, and we do not claim otherwise. We hold no card details on this website.",
    ],
  },
  {
    heading: "Changes to this policy",
    blocks: [
      "If this policy changes in substance, the effective date at the top changes with it. Continuing to use the site after that means the revised policy applies.",
    ],
  },
  {
    heading: "Contact us",
    blocks: [
      `Questions about this policy, or a request about your information, go to ${CONTACT_EMAIL} or ${CONTACT_PHONE}.`,
      ...(BUSINESS_ADDRESS.length ? [BUSINESS_ADDRESS.join(", ")] : []),
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy policy"
      intro={`This policy covers ${SITE_URL} and everything ${ENTITY} does with personal information, including phone numbers and text messaging.`}
      sections={SECTIONS}
    />
  );
}
