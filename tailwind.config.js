/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8C00', // Dark Orange - for action buttons
          light: '#FFA500',
          dark: '#D57500',
        },
        secondary: {
          DEFAULT: '#2D68C4', // Smart Blue - for recurring donations
          light: '#477ED5',
          dark: '#1E4482',
        },
        accent: {
          salmon: '#F88379', // Sweet Salmon - for highlights
          navy: '#00356B', // Regal Navy - for trust elements
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow-orange': '0 0 20px rgba(255, 140, 0, 0.3)',
        'glow-blue': '0 0 20px rgba(45, 104, 196, 0.3)',
      },
    },
  },
  plugins: [],
}