const { version } = require("./package.json")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    APP_VERSION: version,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
