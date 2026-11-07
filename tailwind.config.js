/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#0f0f10',
          800: '#141416',
          700: '#1c1c21',
          600: '#25252b'
        },
        crimson: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          glow: '#ff1e42'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 25px -5px rgba(239, 68, 68, 0.4)',
        'red-glow-lg': '0 0 40px -5px rgba(239, 68, 68, 0.55)',
        'red-subtle': '0 4px 20px -2px rgba(239, 68, 68, 0.15)',
      }
    },
  },
  plugins: [],
}

