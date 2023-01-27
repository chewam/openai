const { version } = require("./package.json")

const securityHeaders = [
  {
    value: "1; mode=block",
    key: "X-XSS-Protection",
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    APP_VERSION: version,
  },
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
