/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 importantísimo
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Neometric', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

