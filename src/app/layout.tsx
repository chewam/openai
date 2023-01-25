import "./globals.css"

import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head />
    <body>{children}</body>
  </html>
)

export default Layout
