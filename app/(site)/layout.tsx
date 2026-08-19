import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * Chrome for the real site.
 *
 * The holding page lives outside this group at /coming-soon, so it renders
 * without a header or footer without anything having to check a flag. The
 * (site) folder is a route group, so it does not appear in any URL.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
