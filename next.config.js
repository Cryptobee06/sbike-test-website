/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    EXPORT_MODE: 'true'
  },
   
};

module.exports = nextConfig;
