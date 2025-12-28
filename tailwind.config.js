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
        'yellow': '#F39C12',
        'yellow-border': '#EAE1D1',
        'light-yellow': '#F8F0E5',
        'light-yellow-border': '#E5DADB',
        'blue': '#006FFF',
        'blue20': '#006FFF33',
        'light-blue': '#EFF6FA',
        'black': '#333',
        'black24' : '#1E1F2129',
        'black80': '#1E1F21',
        'gray': '#4E4E4E',
        'gray-dark': '#1C1C1C1F',
        'gray-dark16': '#1C1C1C29',
        'gray-light': '#585858',
        'gray-border': '#DEDEDE',
        'white12': '#FFFFFF1F',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        passion: ['Passion One', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}