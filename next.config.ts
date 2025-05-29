import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.google.com', 'www.montgomeryadvertiser.com', 'www.mtrymca.org', 's3.amazonaws.com', 'reclique-core-savannah.s3.amazonaws.com'],
  },
};

export default nextConfig;
