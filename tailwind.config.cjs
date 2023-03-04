/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montesserat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      sm: { min: "300px", max: "600px" },
      md: { min: "600px", max: "1023px" },
      lg: { min: "1024px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
