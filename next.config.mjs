const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'html.designingmedia.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net', pathname: '/**' },
      { protocol: 'https', hostname: 'img.icons8.com', pathname: '/**' }, // Added here
      { protocol: 'https', hostname: 'cdn.worldvectorlogo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
      { protocol: 'https', hostname: 'www.vectorlogo.zone', pathname: '/**' },
      { protocol: 'https', hostname: 'www.svgrepo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'icon.icepanel.io', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.brandfetch.io', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.iconscout.com', pathname: '/**' },
      { protocol: 'https', hostname: 'seeklogo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'trufflesuite.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cryptologos.cc', pathname: '/**' },
      { protocol: 'https', hostname: 'huggingface.co', pathname: '/**' },
      { protocol: 'https', hostname: 'miro.medium.com', pathname: '/**' },
      { protocol: 'https', hostname: 'static-00.iconduck.com', pathname: '/**' },
      { protocol: 'https', hostname: 'vitejs.dev', pathname: '/**' },
    ],
  },
  transpilePackages: [
    "@splinetool/react-spline",
    "react-alice-carousel",
    "react-slick",
    "slick-carousel",
    "gsap"
  ],
};

export default nextConfig;