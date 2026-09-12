// The handful of facts the layout needs. One place, so the nav and the footer
// cannot disagree with each other.
export const SITE_NAME = "Pillar & Frame";
export const REGION = "Central Ohio";
export const CONTACT_EMAIL = "doyle@pillarandframe.com";

// Empty until the real profile URL is known. The footer omits the link rather
// than pointing at a guess.
export const LINKEDIN_URL = "";

// Commercial, Operations, Residential, Work. Right-aligned in the nav, with
// the audit button after them.
export const NAV = [
  { href: "/commercial", label: "Commercial" },
  { href: "/operations", label: "Operations" },
  { href: "/residential", label: "Residential" },
  { href: "/work", label: "Work" },
];

// The three offer types, used by /audit and /thanks to read ?type=.
export const TYPES = ["commercial", "operations", "residential"];
