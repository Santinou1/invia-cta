/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f0e8',
          300: '#ede5d8',
          400: '#e4d7c5',
          500: '#d9c7b0',
          600: '#c9b39a',
          700: '#b69b82',
          800: '#9d836d',
          900: '#826b59',
        },
        nude: {
          50: '#fdf8f6',
          100: '#f9eeea',
          200: '#f3ddd4',
          300: '#eac5b5',
          400: '#dfa78f',
          500: '#d18968',
          600: '#be6f4e',
          700: '#9f5a3f',
          800: '#834c37',
          900: '#6d4030',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
