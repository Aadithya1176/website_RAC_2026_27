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
          50: '#eef7f8',
          100: '#d9edf0',
          200: '#b8dce2',
          300: '#8fc2cd',
          400: '#5d9ead',
          500: '#347a8d',
          600: '#025063',
          700: '#014252',
          800: '#033746',
          900: '#062d38',
          950: '#041c24',
          DEFAULT: '#025063',
        },
        primary: '#025063',
        secondary: '#014252',
        accent: '#d9edf0',
        background: '#f8fbfc',
        'text-dark': '#10212b',
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f4f8fa',
          muted: '#e7eff3',
        },
        ink: {
          DEFAULT: '#10212b',
          soft: '#41515b',
          muted: '#6b7280',
        },
        border: '#d6e5ea',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
} 
