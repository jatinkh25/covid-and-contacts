/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kaushan: "'Kaushan Script', cursive",
      },
      backgroundColor: {
        'prim-bg-color': '#fffefe;',
      },
      boxShadow: {
        lg: '0 1px 2px rgba(0,0,0,.07),0 2px 4px rgba(0,0,0,.07),0 4px 8px rgba(0,0,0,.07),0 8px 16px rgba(0,0,0,.07),0 16px 32px rgba(0,0,0,.07),0 32px 64px rgba(0,0,0,.07)',
        md: 'hsla(240,5%,41%,.2) 0px 7px 29px 0px',
        // lg: '0px 1px 25px -10px rgba(0,64,128,0.4)',
      },
      letterSpacing: {
        tight: '-0.01em',
      },
      width: {
        page: 'calc(100% - 250px)',
      },
      fontSize: {
        md: '18px',
        lg: '22px',
      },
      colors: {
        'light-blue': '#9EA9F0',
        'dark-blue': '#2D6187',
      },
      zIndex: {
        negative: '-1 !important',
      },
    },
  },
  plugins: [],
}
