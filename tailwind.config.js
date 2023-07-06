/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-80": {
          transform: "rotateY(80deg)",
        },
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
      });
    },
  ],
};
