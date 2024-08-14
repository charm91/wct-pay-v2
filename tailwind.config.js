/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "0px 14px 26px 0px rgba(17, 87, 141, 0.12)",
      },
      colors: {
        "blue-gray": "#1c46b5",
        primary: {
          50: "#f2f8fd",
          100: "#e4effa",
          200: "#c2def5",
          300: "#8dc4ec",
          400: "#4fa5e1",
          500: "#298ace",
          600: "#1c75bc",
          700: "#16578e",
          800: "#164a76",
          900: "#183f62",
          950: "#102841",
        },
      },
    },
  },
  plugins: [],
};
