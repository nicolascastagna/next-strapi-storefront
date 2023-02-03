/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.NEXT_APP_API_URL,
    UPLOAD_URL: process.env.NEXT_APP_UPLOAD_URL,
    TOKEN: process.env.NEXT_APP_API_TOKEN,
  },
};

module.exports = nextConfig;
