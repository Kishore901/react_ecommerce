const tailwindcss = require('tailwindcss');
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Antonio'],
      },
    },
  },
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
