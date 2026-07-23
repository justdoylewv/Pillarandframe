import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/content/site";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pillar & Frame | Story-led film studio. The Trust Engine.",
    template: "%s | Pillar & Frame",
  },
  description:
    "You know your work. We help you say it. Real stories captured on film, turned into a year of content, put to work on LinkedIn and Google. A system, with coaching along the way.",
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Pillar & Frame | Story-led film studio. The Trust Engine.",
    description:
      "Real stories captured on film, turned into a year of content, put to work on LinkedIn and Google. A system, with coaching along the way.",
    type: "website",
    siteName: "Pillar & Frame",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pillar & Frame",
    description:
      "A story-led film studio in Ohio. The Trust Engine and Systems Coaching.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pillar & Frame",
  url: SITE_URL,
  description:
    "A story-led film studio in Ohio. Real stories captured on film, turned into a content waterfall, put to work on LinkedIn and Google, with monthly coaching built in. Built for founder-driven service brands.",
  areaServed: {
    "@type": "State",
    name: "Ohio",
    containedInPlace: { "@type": "Country", name: "US" },
  },
  subOrganization: {
    "@type": "Organization",
    name: "City Spotlight Ohio",
    url: "https://cityspotlightohio.com",
  },
  sameAs: [],
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pillar & Frame",
  url: SITE_URL,
  description:
    "Story-led film studio for founder-driven service brands. The Trust Engine: real stories captured on film, turned into a content waterfall, put to work on LinkedIn and Google Business Profiles. Plus systems coaching for CRM, follow-up, and automations.",
  areaServed: [
    { "@type": "State", name: "Ohio" },
    { "@type": "Country", name: "United States" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "The Trust Engine",
        url: `${SITE_URL}/trust-engine`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Systems Coaching",
        url: `${SITE_URL}/systems-coaching`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <JsonLd data={ORG_JSONLD} />
        <JsonLd data={SERVICE_JSONLD} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
