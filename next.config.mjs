/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@splinetool/react-spline",
    "react-alice-carousel",
    "react-slick",
    "slick-carousel",
    "gsap"
  ],
};

export default nextConfig;
