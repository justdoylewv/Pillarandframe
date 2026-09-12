import { defineConfig } from "astro/config";

// Static output. No adapter, no server routes: the forms post straight to the
// GoHighLevel webhook, so nothing here needs a runtime.
export default defineConfig({
  output: "static",
  site: "https://pillarandframe.com",
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
