/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
      },
      colors: {
        casper: {
          100: "#e5ecf4",
          200: "#d0e0ed",
          300: "#a0c1da",
          400: "#8ab0d0",
          500: "#6e96c3",
          600: "#5b80b5",
          700: "#506ea5",
          800: "#455c88",
          900: "#3b4d6d",
        },
        // ...
      },
    },
  },
  plugins: [],
};
