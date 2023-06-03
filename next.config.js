module.exports = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ['api.mapbox.com']
  },
};
