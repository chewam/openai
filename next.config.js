const { version } = require("./package.json")

const stylesHashes = [
  "'sha256-nV/9MCvxRKsBwS6o3BVMzpGfnO4kb9yRBMAf2CEulIs='",
  "'sha256-CSr5A7IS9dRw3Uo7TFEY+Os1KKjUjndCqZWzkW4uTaY='",
].join(" ")

const ContentSecurityPolicy = `
  font-src 'self';
  base-uri 'none';
  object-src 'none';
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' ${stylesHashes} 'unsafe-hashes';
`

const securityHeaders = [
  {
    value: "1; mode=block",
    key: "X-XSS-Protection",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
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
