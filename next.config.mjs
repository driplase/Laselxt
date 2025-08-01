/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://lase.dev/assets/**')],
  },
};

export default nextConfig;
