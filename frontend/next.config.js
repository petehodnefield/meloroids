/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/",
        port: "en/0/04/Juice_Wrld_-_Death_Race_for_Love.png",
      },
    ],
  },
};

module.exports = nextConfig;

// (https://upload.wikimedia.org/wikipedia/en/0/04/Juice_Wrld_-_Death_Race_for_Love.png)
