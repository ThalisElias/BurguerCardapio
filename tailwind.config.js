/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        home: "url('./img/bg.png')",
      },
      colors: {
        "black-50": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
