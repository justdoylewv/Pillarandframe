import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { SITE_NAME } from "@/lib/content/site";

/**
 * The holding page, as a real route.
 *
 * Middleware rewrites every path here while the site is gated, which is why
 * this sits outside the (site) group: it renders with no header or footer and
 * nothing else has to know the gate exists.
 *
 * Visiting /coming-soon directly is harmless. It is the same page a gated
 * visitor sees at any other address.
 */
export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} | Coming soon` },
  description:
    "A story-led film studio in Ohio. The new site is on its way. The calendar is open in the meantime.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | Coming soon`,
    description:
      "A story-led film studio in Ohio. The new site is on its way. The calendar is open in the meantime.",
  },
  twitter: {
    title: `${SITE_NAME} | Coming soon`,
    description: "A story-led film studio in Ohio. The new site is on its way.",
  },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
