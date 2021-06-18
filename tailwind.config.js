// tailwind.config.js
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
      
        'orange': {
          50: '#fff1e8',
          100: '#ffddc5',
          200: '#ffc69e',
          300: '#ffaf77',
          400: '#ff9d5a',
          500: '#ff8c3d',
          600: '#ff8437',
          700: '#ff792f',
          800: '#ff6f27',
          900: '#ff5c1a',
          
        }
      },
      'cyan': {
        50: '#e8fdff',
          100: '#c5fbff',
          200: '#9ef9ff',
          300: '#77f6ff',
          400: '#5af4ff',
          500: '#3df2ff',
          600: '#37f0ff',
          700: '#2feeff',
          800: '#27ecff',
          900: '#1ae8ff',
         
      },
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
