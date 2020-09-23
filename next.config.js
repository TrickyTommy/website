const socials = require("./src/socials");

module.exports = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  reactStrictMode: true,
  async redirects() {
    return socials.map(({ name, href }) => ({
      source: `/${name.toLowerCase()}`,
      destination: href,
      permanent: true,
    }));
  },
};
