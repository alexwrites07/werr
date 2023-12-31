/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "star-fall": {
          "0%": {
            transform: "scale(0)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
      animation: {
        fall: "fall 1s ease-in-out forwards infinite",
        "star-fall": "star-fall 3s ease-in-out forwards infinite",
      },
    },
  },
  plugins: [],
};
