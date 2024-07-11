/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        primary1: "#363738",
        secondary3: "#f5f5f5",
        secondary1: "#fefefe",
        red: "#db4444",
        button1: "#47b486",
        button2: "#db4444",
        hoverbutton1: "#e2b93b",
        hoverbutton2: "#eb5757",
        text1: "#fafafa",
        text2: "#7d8184",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
