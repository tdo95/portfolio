/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      // sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          blue: "#0d0a32",
          lighterBlue: "#3d31d6",
          purple: "#826ffa"
        }
      }
    },
  },
  plugins: [],
}
