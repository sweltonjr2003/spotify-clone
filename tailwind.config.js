/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ad: '#ffcdd2',
        background: '#121212'
      }
    },
  },
  plugins: [],
}