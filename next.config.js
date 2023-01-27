const { version } = require("./package.json")

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: { APP_VERSION: version },
}

module.exports = nextConfig
