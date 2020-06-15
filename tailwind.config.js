module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    fontSize: {
      'xs': '.65rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['Sohne', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Founders Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        prbred: '#E3502D'
      },
      maxWidth: {
        '2xs': '16rem'
      }
    }
  },
  corePlugins: {
    container: false
  }
}