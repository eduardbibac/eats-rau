/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['unsplash.com', 'plus.unsplash.com','images.unsplash.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};
export default nextConfig;
