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
        'maroon': '#96805F',
        'beige': '#F9F4EC',
        'beige-border': '#E3DCD1',
        'para': '#626B71',
        'black': '#191919',
        'brown': '#7E7B76',
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