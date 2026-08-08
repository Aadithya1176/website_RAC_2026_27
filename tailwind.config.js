/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4f4',
          100: '#d7e5e6',
          200: '#b9d0d2',
          300: '#95b4b8',
          400: '#628991',
          500: '#2f6874',
          600: '#025063',
          700: '#024556',
          800: '#023845',
          900: '#022b35',
          950: '#011f26',
          DEFAULT: '#025063',
        },
        gold: {
          50: '#fbf5e7',
          100: '#f7ead0',
          200: '#f0d59e',
          300: '#e9b44c',
          400: '#d99e34',
          500: '#b47d19',
          600: '#8d6013',
          DEFAULT: '#E9B44C',
        },
        primary: '#025063',
        secondary: '#022b35',
        accent: '#E9B44C',
        background: '#f5f0e8',
        'text-dark': '#12242b',
        surface: {
          DEFAULT: '#fffdf9',
          subtle: '#f7f2ea',
          muted: '#ece4d8',
          dark: '#0d2f38',
        },
        ink: {
          DEFAULT: '#12242b',
          soft: '#4d5f63',
          muted: '#7d8b8e',
          inverse: '#f7f3ed',
        },
        border: '#d7cbb8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        editorial: '0 18px 60px rgba(1, 31, 38, 0.10)',
        soft: '0 12px 30px rgba(2, 80, 99, 0.08)',
      },
    },
  },
  plugins: [],
} 
