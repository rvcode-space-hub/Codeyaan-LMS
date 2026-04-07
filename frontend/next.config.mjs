/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    reactStrictMode: false,

    images: {
        domains: ['res.cloudinary.com'], // Add your Cloudinary domain here
        qualities: [75, 100],
    },

};

export default nextConfig;
