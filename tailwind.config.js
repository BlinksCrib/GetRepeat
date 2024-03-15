/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5ff7d",
        secondary: "#ede7e2",
        black: "#181818",
        white: "#F2F2F2",
        "custom-yellow": "#F5FF7D",
        based: "#171717",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
    screens: {
      fd: [{ max: "320px" }],
      lmd: [{ max: "768px" }],
      llg: [{ max: "992px" }],
      // xs: "480px",
      // ss: "620px",
      // sm: "768px",
      // md: "1060px",
      // lg: "1200px",
      // xl: "1700px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1600px",
      "4xl": [{ max: "2000px" }],
      "6xl": "2800px",
    },
  },
  plugins: [],
};
