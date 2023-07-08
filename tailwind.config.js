/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
