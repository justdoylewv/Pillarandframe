import type { Metadata } from "next";
import LegalDoc, { type Section } from "@/components/LegalDoc";
import {
  BASE_REGION,
  BUSINESS_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_ENTITY_NAME,
  SITE_NAME,
  SITE_URL,
  SMS_PROGRAM_NAME,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: { absolute: `Terms of Service | ${SITE_NAME}` },
  description: `The terms covering use of the ${SITE_NAME} website, and the terms of our SMS messaging program.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const ENTITY = LEGAL_ENTITY_NAME || SITE_NAME;

const SECTIONS: Section[] = [
  {
    heading: "These terms",
    blocks: [
      `These terms govern your use of ${SITE_URL} and any messages you receive from ${ENTITY}. By using the site, contacting us through it, or agreeing to receive text messages from us, you accept them.`,
      "Work we do for a client is governed by the written agreement for that project. Where that agreement and these terms disagree, the agreement wins.",
    ],
  },
  {
    heading: "Using the site",
    blocks: [
      "You may read this site, and share links to it, for any lawful purpose. You may not attempt to break into it, scrape it at a rate that degrades it for other people, or use it to send anything unlawful.",
      "Everything on this site, including the films, photographs, and written pieces, belongs to us or to the clients who appear in it. Do not republish it as your own.",
    ],
  },
  {
    heading: "SMS messaging program",
    blocks: [
      `This section is the full terms of our text messaging program, ${SMS_PROGRAM_NAME}.`,
      { subhead: "Consent" },
      "By giving us your mobile number through a form, our chat widget, a booking, or in writing, and agreeing to be contacted, you consent to receive text messages from us at that number. Messages may be sent using an automatic telephone dialing system.",
      {
        note: "Consent to receive text messages is not a condition of purchasing any goods or services. You can decline and still work with us.",
      },
      { subhead: "What we send" },
      "Messages about an enquiry you made, appointment reminders and scheduling, updates on work in progress, and occasional offers if you have agreed to those. We do not send messages about anything unrelated to our services.",
      { subhead: "How often" },
      "Message frequency varies. It depends on what you have asked for and what stage your project is at.",
      { subhead: "Cost" },
      "Message and data rates may apply. We do not charge for the messages themselves; your mobile carrier may.",
      { subhead: "Opting out" },
      "Reply STOP to any message to stop receiving them. You will get one confirmation and nothing after that. You can start again at any time by texting us or by asking us to add you back.",
      { subhead: "Getting help" },
      `Reply HELP to any message, or contact us at ${CONTACT_EMAIL} or ${CONTACT_PHONE}.`,
      { subhead: "Carriers" },
      "Carriers are not liable for delayed or undelivered messages. Delivery is subject to effective transmission by your mobile carrier and is outside our control.",
      { subhead: "Your information" },
      "How we handle your mobile number is set out in our privacy policy. In short: no mobile information is shared with third parties or affiliates for marketing or promotional purposes, and your text messaging opt-in data and consent are never shared with anyone.",
    ],
  },
  {
    heading: "Email",
    blocks: [
      "If you give us your email address, we may use it to reply to you and to send material you asked for. Marketing emails carry an unsubscribe link, and unsubscribing stops them. Messages about work already in progress are not marketing and continue.",
    ],
  },
  {
    heading: "Quotes and prices on this site",
    blocks: [
      "Prices published on this site describe our standard packages and are not an offer capable of acceptance. A price becomes binding when it is in a written quote or agreement signed by both of us. Published prices can change, and the scope attached to them is what defines what is included.",
    ],
  },
  {
    heading: "Third-party links and tools",
    blocks: [
      "This site links to and embeds services run by other people, including a booking calendar, forms, a chat widget, and video players. We do not control them and are not responsible for their content or their practices. Their own terms and privacy policies apply when you use them.",
    ],
  },
  {
    heading: "Disclaimer",
    blocks: [
      "THE SITE AND ITS CONTENT ARE PROVIDED AS IS AND AS AVAILABLE, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
      "Nothing on this site is legal, financial, or marketing advice for your particular situation, and we do not promise any particular result from the work we do or from anything published here.",
    ],
  },
  {
    heading: "Limitation of liability",
    blocks: [
      `TO THE FULLEST EXTENT PERMITTED BY LAW, ${ENTITY.toUpperCase()} IS NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS OR REVENUE, ARISING OUT OF YOUR USE OF THIS SITE.`,
      "Nothing here limits liability that cannot lawfully be limited.",
    ],
  },
  {
    heading: "Governing law",
    blocks: [
      `These terms are governed by the laws of the State of ${BASE_REGION}, without regard to its conflict of law rules. Disputes go to the state or federal courts sitting in ${BASE_REGION}.`,
    ],
  },
  {
    heading: "Changes to these terms",
    blocks: [
      "If these terms change in substance, the effective date at the top changes with them. Continuing to use the site, or continuing to receive messages, after that means the revised terms apply.",
    ],
  },
  {
    heading: "Contact us",
    blocks: [
      `${CONTACT_EMAIL} or ${CONTACT_PHONE}.`,
      ...(BUSINESS_ADDRESS.length ? [BUSINESS_ADDRESS.join(", ")] : []),
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of service"
      intro={`These terms cover use of ${SITE_URL}, and set out the terms of our SMS messaging program.`}
      sections={SECTIONS}
    />
  );
}
