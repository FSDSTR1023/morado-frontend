/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ['./src/**/*.{js,jsx,ts,tsx}',
            "./node_modules/tw-elements-react/dist/js/**/*.js"],
            
            
  
            // './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
      'tang': ["Tangerine"],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      activeLink: {
        accent: {
          DEFAULT: '#967142',
        },
        inset: {
          '0': 0,
          'auto': 'auto',
          '1/2': '50%',
        },
        zIndex: {
          '1': 1,
        }
      },
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
      },
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
  ],
});

