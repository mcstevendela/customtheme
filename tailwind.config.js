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
        'light-blue': '#EFF6FA',
        'black': '#000',
        'gray': '#E3E3E3',
        'white30': 'rgba(255, 255, 255, 0.3)',
        'white12': 'rgba(255, 255, 255, 0.12)',
        'white6': 'rgba(255, 255, 255, 0.06)',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}