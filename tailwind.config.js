module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#FFFFFF",
      primary: "#1D1D20",
      secondary: "#9E9E9E",
      active: "#EF4444",
      light: "#FFFFFF",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
