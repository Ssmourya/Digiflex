const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: [
    "@splinetool/react-spline",
    "react-alice-carousel",
    "react-slick",
    "slick-carousel",
    "gsap"
  ],
  images: {
    unoptimized: true,
  },
};