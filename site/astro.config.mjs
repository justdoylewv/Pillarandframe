import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static output. No adapter, no server routes: the forms post straight to the
// GoHighLevel webhook, so nothing here needs a runtime.
export default defineConfig({
  site: "https://pillarandframe.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({ filter: (page) => !page.includes("/styleguide") }),
  ],
});
