/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: [
        "1rem",
        {
          fontWeight: "400",
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1.25rem",
        {
          fontWeight: "400",
          lineHeight: "2rem",
        },
      ],
      lg: [
        "1.5rem",
        {
          fontWeight: "600",
          lineHeight: "2rem",
        },
      ],
      xl: [
        "2rem",
        {
          fontWeight: "700",
          lineHeight: "2.5rem",
        },
      ],
    },
    extend: {
      fontFamily: {
        code: ["var(--font-source-code-pro)"],
        sans: ["var(--font-source-sans-pro)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
