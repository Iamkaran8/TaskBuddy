/** @type {import('tailwindcss').Config} */
import img from './src/assets/'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background-black": "#292929",
      "purple-clr": "#7B1984",
      "purple100": "rgba(123, 25, 132, 0.15)",
      "gray-txt": "rgba(0, 0, 0, 0.6)",
      "gray-border": "rgba(0, 0, 0, 0.1)",
      "light-gray": "rgba(35, 31, 32, 0.82)",
      "Green": "#1B8D17",
      "gray": "#F1F1F1",
      "border-lightgray": "rgba(88, 87, 81, 0.07)",
      "slightdarkgray": "rgba(88, 87, 81, 0.28)",
      "lightgraytxt": "rgba(0, 0, 0, 0.52)",
      "overlay-bg" : "rgba(0, 0, 0, 0.5)",
      "gray-button-border" : "rgba(0, 0, 0, 0.19)",
      "input-bg" : "rgba(0, 0, 0, 0.13)",
    },
    backgroundImage: {
      'mbl-bg': "url('./src/assets/mobile_bg.png.png')",
    },
    extend: {},
  },
  plugins: [],
}
