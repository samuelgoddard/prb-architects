module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active', 'bg-prbred', 'has-scroll-smooth', 'baseline'],
    }
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
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
      '6xl': '3.4375rem',
      '7xl': '5.65rem',
      '8xl': '8rem',
      '9xl': '11.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Sohne', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Founders Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        offblack: '#1D1D1D',
        prbred: '#dc481e'
      },
      height: {
        'half': '50%'
      },
      maxWidth: {
        '2xs': '16rem'
      },
      spacing: {
        '14': '3.55rem',
        '18': '4.45rem',
        '22': '5.25rem',
        '28': '6.65rem',
        '30': '7rem',
        '46': '11rem',
        '72': '19.5rem',
        '128': '24rem'
      },
      lineHeight: {
        'negative': '0.7',
        'slightnegative': '0.9',
        'extratight': '1.1',
      }
    }
  },
  variants: {
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  corePlugins: {
    container: false
  }
}