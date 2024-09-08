/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        eyeLogo: "url(/images/Logo-eye.jpg)",
        eyeLogoWhite: "url(/images/Logo-eye-white.png)",
        conLogo: "url(/images/Logo-Con.png)",
      },
      colors: {
        "prana-white": "#f3f4f6",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease 0s 1 normal",
        "fade-out": "fadeOut 0.5s ease 0s 1 normal",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", filter: "alpha((opacity = 0))" },
          "100%": { opacity: "0.8", filter: "none" },
        },
        fadeOut: {
          "0%": { opacity: "0.8", filter: "none" },
          "100%": { opacity: "0", filter: "alpha((opacity = 0))" },
        },
      },
      transitionDuration: {
        500: "500ms",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-garamond)", ...defaultTheme.fontFamily.serif],
        openSans: ["var(--font-openSans)", "sans"],
      },
    },
  },
};
