/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: [
    //   "image/jpg",
    //   "image/jpeg",
    //   "image/png",
      "image/webp",
      "image/avif",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shelterbackapi.azurewebsites.net",
        // port: "",
        // pathname: "/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
