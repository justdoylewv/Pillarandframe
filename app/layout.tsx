import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import JsonLd from "@/components/JsonLd";
import AdminProvider from "@/components/AdminProvider";
import AdminBar from "@/components/AdminBar";
import {
  ENTITY_DESCRIPTION,
  PLAUSIBLE_DOMAIN,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content/site";
import { siteGraph } from "@/lib/content/schema";

// The same faces City Spotlight runs on: DM Serif Display for the headlines,
// DM Sans for everything else. Geist Mono stays for the kickers and labels.
const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Video and Copy Studio in Columbus, Ohio`,
    // Page titles carry their own city and service words, so the template
    // only has to add the brand.
    template: `%s | ${SITE_NAME}`,
  },
  description: ENTITY_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: `${SITE_NAME} | Video and Copy Studio in Columbus, Ohio`,
    description: ENTITY_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Video and Copy Studio in Columbus, Ohio`,
    description: ENTITY_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} ${GeistMono.variable}`}
    >
      <body>
        {/* One graph, cross-referenced by id, on every page. */}
        <JsonLd data={siteGraph()} />
        {PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.outbound-links.tagged-events.js"
            strategy="afterInteractive"
          />
        ) : null}
        {/* Chrome lives in (site)/layout.tsx so the holding page can render
            without it. The admin provider wraps everything so an editable
            string works on any page; the bar renders for nobody unless the
            admin cookie is present. */}
        <AdminProvider>
          {children}
          <AdminBar />
        </AdminProvider>
      </body>
    </html>
  );
}
