/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgCustom: "#fdf1f5",
      },
    },
  },
  plugins: [],
};
