import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set by the deploy workflow while the site is served from a GitHub Pages
  // sub-path. Unset locally and on a custom domain, so the site runs at "/".
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
