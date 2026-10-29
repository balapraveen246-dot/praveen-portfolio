/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#09090B',
          card: '#111114',
          subtle: '#18181B',
        },
        gold: {
          DEFAULT: '#D4AF37',
          hover: '#E5C76B',
          light: '#F3E5AB',
          muted: 'rgba(212, 175, 55, 0.15)',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        text: {
          main: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        border: {
          subtle: '#27272A',
          gold: 'rgba(212, 175, 55, 0.3)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 25px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
}
