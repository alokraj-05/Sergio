import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-direction": "0px 0px 10px RGB: (88 101 242)",
      },
      colors: {
        "blurple-color": "rgb(88,101,242)",
        "sregio-purple": "#311c63",
        "sergio-purple-text": "#773efd",
        "sergio-pink": "#a079fa",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        boldonse: ["Boldonse", "system-ui"],
      },
      keyframes: {
        borderGlow: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
            opacity: "0",
          },
          "50%": {
            transform: "translate(0%, -50%) rotate(180deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(50%, 50%) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        borderGlow: "borderGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
