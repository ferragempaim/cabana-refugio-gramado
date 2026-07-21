import type { NextConfig } from "next";

// GitHub Pages serve num subcaminho (/cabana-refugio-gramado).
// Em produção usamos basePath; em dev fica na raiz.
const isProd = process.env.NODE_ENV === "production";
const repo = "cabana-refugio-gramado";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;
