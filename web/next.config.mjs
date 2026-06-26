/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'cdn.beekka.com'},
    ],
  },
};

export default nextConfig;
