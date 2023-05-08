const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{tsx, ts}'],
  theme: {
    fontFamily: {
      sans: 'Ubuntu',
    },
    fontSize: {
      xss: '12px',
      sm: '14px',
      base: '16px',
      xl: '22px',
      '2xl': '40px',
      '3xl': '64px',
    },
    colors: {
      dark: '#333333',
      grey: '#BDBDBD',
      white: '#FFFFFF',
      red: '#C30000',
      green: '#0DC332',
      black: '#2C2C2C',
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '.3s',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.btn-thick': {
          width: '222px',
          height: '72px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          fontFamily: 'Ubuntu',
          fontSize: '12px',
          fontWeight: 400,
          color: theme('colors.white'),
          textTransform: 'uppercase',
          letterSpacing: '0.2em',

          transition: 'all ease-in-out .3s',
        },
        '.btn-thin': {
          width: '100%',
          height: '42px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          fontFamily: 'Ubuntu',
          fontSize: '12px',
          fontWeight: 400,
          color: theme('colors.white'),
          textTransform: 'uppercase',
          letterSpacing: '0.2em',

          transition: 'all ease-in-out .3s',
        },
        '.main-input': {
          width: '100%',

          background: 'transparent',

          fontFamily: 'Ubuntu',
          fontWeight: 400,
          fontSize: '14px',
          color: theme('color.dark'),

          paddingTop: '15px',
          paddingLeft: '20px',

          '&:placeholder': {
            color: theme('color.grey'),
          },
          '&:focused': {
            borderLeft: `2px solid ${theme('color.grey')}`,
          },
        },
        '.main-border': {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme('colors.green'),
          borderRadius: '5px',
        },
      });
    }),
  ],
};
