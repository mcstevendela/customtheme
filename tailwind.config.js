module.exports = {
  content: [
    './*.php',
    './templates/**/*.twig',
    './js/**/*.js',
    '!./scss/plugins/aos.scss',
    '!./scss/aos-frontend.scss'
  ],
  theme: {
    screens: {
      'xs': '343px',
      // => @media (min-width: 480px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'blue': '#1470AF',
        'blue20': 'rgba(20, 112, 175, 0.2)',
        'light-blue': '#EFF6FA',
        'black': '#000',
        'gray': '#414141',
        'gray-dark': '#1C1C1C1F',
        'gray-light': '#585858'
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}