/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors: {
        primary: {
          "50": "#666",
          "100": "#444",
          "200": "#fdfbfb",
          "300": "#a7a4a4",
          "400": "#222",
          "500": "#be9656",
          "600": "#999",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554"
        }
      },
    },
  },
  plugins: [],
}

