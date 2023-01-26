import localFont from "@next/font/local"

import "./globals.css"

const sourceSans = localFont({
  preload: true,
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-source-sans-pro",
  src: [
    {
      weight: "400",
      style: "normal",
      path: "../fonts/SourceSansPro-Regular.ttf",
    },
    {
      weight: "600",
      style: "normal",
      path: "../fonts/SourceSansPro-SemiBold.ttf",
    },
    {
      weight: "700",
      style: "normal",
      path: "../fonts/SourceSansPro-Bold.ttf",
    },
  ],
})

const sourceCode = localFont({
  weight: "400",
  preload: true,
  style: "normal",
  display: "swap",
  fallback: ["monospace"],
  variable: "--font-source-code-pro",
  src: "../fonts/SourceCodePro-Regular.ttf",
})

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${sourceSans.variable} ${sourceCode.variable}`}>
    <head />
    <body>{children}</body>
  </html>
)

export default Layout
