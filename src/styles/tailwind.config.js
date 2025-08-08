/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable toggling dark mode via 'class' strategy
  content: [
    './src/pages/**/*.{astro,jsx,tsx,js,ts}',
    './src/components/**/*.{astro,jsx,tsx,js,ts}',
    './src/layouts/**/*.{astro,jsx,tsx,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#db2777', // pink-600 custom alias
          hover: '#be185d',   // pink-700 for hover states
        },
        background: {
          primary: '#000000',
          secondary: '#121212',
        },
        text: {
          primary: '#f9fafb',
          secondary: '#9ca3af',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
