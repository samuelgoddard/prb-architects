module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active', 'bg-prbred', 'has-scroll-smooth'],
    }
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px"
    },
    fontSize: {
      '2xs': '.45rem',
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
      '7xl': '6.5rem',
      '8xl': '8rem',
      '9xl': '11.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Sohne', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Founders Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        black: '#1D1D1D',
        prbred: '#E3502D'
      },
      maxWidth: {
        '2xs': '16rem'
      },
      lineHeight: {
        'negative': '0.75',
      }
    }
  },
  corePlugins: {
    container: false
  }
}