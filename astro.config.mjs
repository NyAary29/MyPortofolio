import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://nyaary29.github.io',
  base:'MyPortofolio',
  trailingSlash:'always',
  integrations: [tailwind()],
});
