import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// When deploying to GitHub Pages as a project repo, set the repo name as base path.
// Remove basePath/assetPrefix when using a custom domain (hunting.0d4y.dev).
const repoName = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  assetPrefix: repoName,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
